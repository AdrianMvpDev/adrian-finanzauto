export default function InfoModal({ isOpen, onClose, item }) {
  return (
    <div
      className={`modal ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto bg-white">
        {/* Contenido del modal */}
        {/* Agrega aquí la información que deseas mostrar y botones de cierre */}
        <button className="modal-close" onClick={onClose}>
          Cerrar Info
        </button>
      </div>
    </div>
  );
}
