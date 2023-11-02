import { useState, useEffect } from 'react';
import { updateUserData } from '../../services/api';

export default function EditModal({ isOpen, onClose, item }) {
  const [editedItem, setEditedItem] = useState(item || {});

  useEffect(() => {
    if (item) {
      setEditedItem(item);
    }
  }, [item]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  };

  const handleSave = () => {
    updateUserData(item.id, editedItem) // Reemplaza 'item.id' con el ID del usuario
      .then((updatedData) => {
        console.log('Datos actualizados:', updatedData);
        onClose();
      })
      .catch((error) => {
        console.error('Error al actualizar los datos:', error);
        onClose(); // Asegúrate de cerrar el modal incluso si hay un error
      });
  };

  return (
    <div
      className={`modal ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto bg-white">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h2 className="text-lg font-semibold text-gray-800">Editar Usuario</h2>
          </div>
          <form className="p-4 border-b rounded-t space-y-3">
            <div className="flex items-center space-x-3">
              <label htmlFor="title" className="w-1/6 text-right font-semibold text-gray-700">
                Título:
              </label>
              <select
                name="title"
                value={editedItem.title || ''}
                onChange={handleFieldChange}
                className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none text-gray-600 capitalize"
              >
                <option value="" selected hidden>
                  {editedItem.title || ''}
                </option>
                <option value="mr.">Mr.</option>
                <option value="ms.">Ms.</option>
                <option value="miss.">Miss.</option>
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <label htmlFor="firstName" className="w-1/6 text-right font-semibold text-gray-700">
                Nombres:
              </label>
              <input
                type="text"
                name="firstName"
                value={editedItem.firstName || ''}
                onChange={handleFieldChange}
                className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none text-gray-600"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label htmlFor="lastName" className="w-1/6 text-right font-semibold text-gray-700">
                Apellidos:
              </label>
              <input
                type="text"
                name="lastName"
                value={editedItem.lastName || ''}
                onChange={handleFieldChange}
                className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none text-gray-600"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label htmlFor="pciture" className="w-1/6 text-right font-semibold text-gray-700">
                Foto:
              </label>
              <input
                type="text"
                name="pciture"
                value={editedItem.picture || ''}
                onChange={handleFieldChange}
                className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none text-gray-600"
              />
            </div>
          </form>
          <div className="flex items-center space-x-3 p-4 border-b rounded-t">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="text-white bg-[#4ed964] hover:opacity-80 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
