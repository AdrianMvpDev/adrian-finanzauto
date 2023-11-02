import React from 'react';

export default function ModalButtons({ onCancel, onSave, isSaving, textButton, textButton2 }) {
  return (
    <div className="flex items-center space-x-3 p-4 border-b rounded-t">
      <button
        onClick={onCancel}
        type="button"
        className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
      >
        Cancelar
      </button>
      <button
        onClick={onSave}
        type="button"
        className="text-white bg-[#4ed964] hover:opacity-80 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        disabled={isSaving}
      >
        {isSaving ? textButton2 : textButton}
      </button>
    </div>
  );
}
