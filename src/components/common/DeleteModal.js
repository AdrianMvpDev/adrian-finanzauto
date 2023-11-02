export default function DeleteModal({ isOpen, onClose, item }) {
  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay"></div>
      <div className="modal-container">
        {/* Contenido del modal */}
        {/* Agrega aquí el mensaje de confirmación de eliminación y botones de confirmación */}
        <button className="modal-close" onClick={onClose}>
          Cerrar Delete
        </button>
      </div>
    </div>
  );
}