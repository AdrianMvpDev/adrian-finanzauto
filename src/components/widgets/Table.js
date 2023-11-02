import React, { lazy, Suspense, memo, useState } from 'react';
import FilterInput from '../common/FilterInput';
import Paginator from './Paginator';
import { faPen, faTrash, faBookReader } from '@fortawesome/free-solid-svg-icons';

const LazyTableHead = lazy(() => import('../common/LazyTableHead'));
const LazyTableBody = lazy(() => import('../common/LazyTableBody'));
const LazyEditModal = lazy(() => import('../common/EditModal'));
const LazyDeleteModal = lazy(() => import('../common/DeleteModal'));
const LazyInfoModal = lazy(() => import('../common/InfoModal'));

export default memo(function Table({ data, setUserData }) {
  const [filterTerm, setFilterTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    data && data.data
      ? data.data.filter((item) =>
          `${item.id} ${item.title} ${item.firstName} ${item.lastName}`.toLowerCase().includes(filterTerm.toLowerCase())
        )
      : [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleIconClick = (icon, item) => {
    if (icon === faPen) {
      setSelectedItem(item);
      setIsEditModalOpen(true);
    } else if (icon === faTrash) {
      setSelectedItem(item);
      setIsDeleteModalOpen(true);
    } else if (icon === faBookReader) {
      setSelectedItem(item);
      setIsInfoModalOpen(true);
    }
  };

  const handleUserDeleted = (userId) => {
    if (data && data.data) {
      const updatedData = data.data.filter((user) => user.id !== userId);
      setUserData({ ...data, data: updatedData });
    }
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsInfoModalOpen(false);
  };

  if (!data) {
    return <div>Cargando...</div>;
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="w-full px-[15px] mx-auto my-10 md:w-4/5 md:px-0">
      <FilterInput filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <table className="w-full table-auto">
        <thead>
          <Suspense fallback={<tr>Loading...</tr>}>
            <LazyTableHead />
          </Suspense>
        </thead>
        <tbody>
          <Suspense fallback={<tr>Loading...</tr>}>
            <LazyTableBody data={itemsToShow} onIconClick={handleIconClick} />
          </Suspense>
        </tbody>
      </table>
      <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyEditModal isOpen={isEditModalOpen} onClose={closeModal} item={selectedItem} setUserData={setUserData} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={closeModal}
          item={selectedItem}
          setUserData={setUserData}
          onUserDeleted={handleUserDeleted}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyInfoModal isOpen={isInfoModalOpen} onClose={closeModal} item={selectedItem} />
      </Suspense>
    </div>
  );
});
