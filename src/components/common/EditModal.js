import { useState, useCallback, lazy, Suspense } from 'react';
import { fetchUserData, createUserData } from '../../services/api';
import ModalButtons from './ModalButtons';
const LazyInputField = lazy(() => import('./InputField'));
const LazySelectField = lazy(() => import('./SelectField'));

export default function CreateModal({ isOpen, onClose, setUserData }) {
  const [newUserData, setNewUserData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    picture: '',
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleFieldChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setNewUserData({
        ...newUserData,
        [name]: value,
      });
    },
    [newUserData]
  );

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      await createUserData(newUserData);
      setIsSaving(false);
      onClose();

      const refreshedData = await fetchUserData();
      setUserData(refreshedData);
    } catch (error) {
      console.error('Error al crear un nuevo usuario:', error);
      setIsSaving(false);
      onClose();
    }
  }, [newUserData, onClose, setUserData]);

  return (
    <div
      className={`modal ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto shadow">
        <div className="relative bg-white rounded-lg shadow border-[#1a6e6a]">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h2 className="text-lg font-semibold text-gray-800">Crear Usuario</h2>
          </div>
          <form className="p-4 border-b rounded-t space-y-3">
            <Suspense fallback={<div>Cargando...</div>}>
              <LazySelectField label="Título" name="title" value={newUserData.title} onChange={handleFieldChange} />
              <LazyInputField label="Nombres" name="firstName" value={newUserData.firstName} onChange={handleFieldChange} />
              <LazyInputField label="Apellidos" name="lastName" value={newUserData.lastName} onChange={handleFieldChange} />
              <LazyInputField label="Foto" name="picture" value={newUserData.picture} onChange={handleFieldChange} />
            </Suspense>
          </form>
          <ModalButtons onCancel={onClose} onSave={handleSave} isSaving={isSaving} textButton={'Guardar'} textButton2={'Guardando...'} />
        </div>
      </div>
    </div>
  );
}
