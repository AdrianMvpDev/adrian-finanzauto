import { useState, useEffect } from 'react';

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
    onClose();
  };

  return (
    <div
      className={`modal ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto bg-white">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h2>Editar usuario</h2>
          </div>
          <form className="flex items-center space-x-2 p-4 border-b rounded-t">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name="title"
              value={editedItem.title || ''}
              onChange={handleFieldChange}
              className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus-visible:outline-none text-[#444b6e]"
            />
            <label htmlFor="title">Nombres:</label>
            <input
              type="text"
              name="title"
              value={editedItem.firstName || ''}
              onChange={handleFieldChange}
              className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus-visible:outline-none text-[#444b6e]"
            />
            <label htmlFor="title">Apellidos:</label>
            <input
              type="text"
              name="title"
              value={editedItem.lastName || ''}
              onChange={handleFieldChange}
              className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus-visible:outline-none text-[#444b6e]"
            />
          </form>
          <div class="flex items-start space-x-2 p-4 border-b rounded-t ">
            <button
              data-modal-hide="default-modal"
              onClick={onClose}
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
            >
              Decline
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              onClick={handleSave}
              class="text-white bg-[#4ed964] hover:hover:opacity-80 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              I accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
