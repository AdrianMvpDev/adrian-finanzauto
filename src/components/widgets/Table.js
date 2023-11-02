import React, { lazy, Suspense, memo, useState } from 'react';
import FilterInput from '../common/FilterInput';
import Paginator from './Paginator';

const LazyTableHead = lazy(() => import('../common/LazyTableHead'));
const LazyTableBody = lazy(() => import('../common/LazyTableBody'));

export default memo(function Table({ data }) {
  const [filterTerm, setFilterTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = data
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

  if (!data) {
    return <div>Cargando...</div>;
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="w-4/5 mx-auto my-10">
      <FilterInput filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <table className="w-full table-auto">
        <thead>
          <Suspense fallback={<tr>Loading...</tr>}>
            <LazyTableHead />
          </Suspense>
        </thead>
        <tbody>
          <Suspense fallback={<tr>Loading...</tr>}>
            <LazyTableBody data={itemsToShow} />
          </Suspense>
        </tbody>
      </table>
      <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
});
