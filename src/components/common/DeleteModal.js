export default function DeleteModal({ isOpen, onClose, item }) {
  return (
    <div
      className={`modal ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto shadow">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center space-x-3 p-4 border-b rounded-lg">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Cancelar
            </button>
            <button
              // onClick={handleSave}
              type="button"
              className="text-white bg-[#4ed964] hover:opacity-80 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              // disabled={isSaving}
            >
              {/* {isSaving ? 'Guardando...' : 'Guardar Cambios'} */} Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
