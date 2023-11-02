import React, { useMemo } from 'react';
import InfoRow from './InfoRow';

function InfoModalContent({ item, onClose }) {
  return (
    <div className="relative bg-white rounded-lg shadow">
      <div className="flex items-start justify-between p-4 border-b rounded-t">
        <h2 className="text-lg font-semibold text-gray-800">Información del Usuario</h2>
      </div>
      <div className="p-4">
        <dl className="flex gap-2 flex-col">
          <InfoRow label="Id" value={item.id} />
          <InfoRow label="Titulo" value={item.title === 'miss' ? 'Sra' : item.title} />
          <InfoRow label="Nombres" value={item.firstName} />
          <InfoRow label="Apellidos" value={item.lastName} />
          <InfoRow label="Foto" value={item.picture} />
        </dl>
      </div>
      <div className="flex items-center space-x-3 p-4 rounded-lg">
        <button
          onClick={onClose}
          type="button"
          className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

function InfoModal({ isOpen, onClose, item }) {
  const memoizedContent = useMemo(() => <InfoModalContent item={item} onClose={onClose} />, [item, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div
      className={`modal ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto shadow">{memoizedContent}</div>
    </div>
  );
}

export default React.memo(InfoModal);
