import React, { useState } from 'react';
import { deleteUserData, fetchUserData } from '../../services/api';
import ModalButtons from './ModalButtons';

export default function DeleteModal({ isOpen, onClose, item, onUserDeleted, setUserData }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      if (item && item.id) {
        await deleteUserData(item.id);

        const updatedData = await fetchUserData();

        if (onUserDeleted) {
          onUserDeleted(item.id);
        }
        if (setUserData) {
          setUserData(updatedData);
        }
      }

      onClose();
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <div
      className={`modal ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto shadow">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h2 className="text-lg font-semibold text-gray-800">Eliminar Usuario</h2>
          </div>
          <div className="flex items-center space-x-3 p-4 border-b">
            <p>Estas seguro de eliminar este usuario?</p>
          </div>
          <ModalButtons onCancel={onClose} onSave={handleDelete} isSaving={isDeleting} textButton={'Eliminar'} textButton2={'Eliminando...'} />
        </div>
      </div>
    </div>
  );
}
