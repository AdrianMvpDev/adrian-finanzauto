import React, { Suspense, lazy, useState } from 'react';
import Header from '../layout/Header';
import { createUserData, fetchUserData } from '../../services/api'; // Importa las funciones necesarias
import ModalButtons from '../common/ModalButtons';

const LazyInputField = lazy(() => import('../common/InputField'));
const LazySelectField = lazy(() => import('../common/SelectField'));

export default function Create() {
  const [newUserData, setNewUserData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({
      ...newUserData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await createUserData(newUserData);
      alert('Creado con éxito');
      setNewUserData({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
      });
      await fetchUserData();
      setIsSaving(false);
    } catch (error) {
      console.error('Error al crear un nuevo usuario:', error);
      setIsSaving(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#fefffd]">
        <div className="w-full px-[15px] mx-auto my-10 md:w-4/5 md:px-0 flex flex-col gap-3">
          <Suspense fallback={<div>Cargando...</div>}>
            <LazySelectField label="Título" name="title" value={newUserData.title} onChange={handleFieldChange} />
            <LazyInputField label="Nombres" name="firstName" value={newUserData.firstName} onChange={handleFieldChange} />
            <LazyInputField label="Apellidos" name="lastName" value={newUserData.lastName} onChange={handleFieldChange} />
            <LazyInputField label="Email" name="email" value={newUserData.email} onChange={handleFieldChange} />
            <LazyInputField label="Foto" name="picture" value={newUserData.picture} onChange={handleFieldChange} />
          </Suspense>
          <ModalButtons onSave={handleSave} isSaving={isSaving} textButton={'Crear'} textButton2={'Creando...'} />
        </div>
      </main>
    </>
  );
}
