import React, { useState } from 'react';
import { deleteUserData, fetchUserData } from '../../services/api';

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
          <div className="flex items-center space-x-3 p-4 rounded-lg">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Cancelar
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="text-white bg-red-500 hover:opacity-80 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              disabled={isDeleting}
            >
              {isDeleting ? 'Eliminando...' : 'Eliminar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
