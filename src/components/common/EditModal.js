import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { fetchUserData, updateUserData } from '../../services/api';
const LazyInputField = lazy(() => import('./InputField'));
const LazySelectField = lazy(() => import('./SelectField'));

export default function EditModal({ isOpen, onClose, item, setUserData }) {
  const [editedItem, setEditedItem] = useState(item || {});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (item) {
      setEditedItem(item);
    }
  }, [item]);

  const handleFieldChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setEditedItem({
        ...editedItem,
        [name]: value,
      });
    },
    [editedItem]
  );

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      await updateUserData(editedItem.id, editedItem);
      const refreshedData = await fetchUserData();
      setIsSaving(false);
      onClose();
      setUserData(refreshedData);
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
      setIsSaving(false);
      onClose();
    }
  }, [editedItem, onClose, setUserData]);

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
            <Suspense fallback={<div>Cargando...</div>}>
              <LazySelectField label="Título" name="title" value={editedItem.title} onChange={handleFieldChange} />
              <LazyInputField label="Nombres" name="firstName" value={editedItem.firstName} onChange={handleFieldChange} />
              <LazyInputField label="Apellidos" name="lastName" value={editedItem.lastName} onChange={handleFieldChange} />
              <LazyInputField label="Foto" name="picture" value={editedItem.picture} onChange={handleFieldChange} />
            </Suspense>
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
              disabled={isSaving}
            >
              {isSaving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
