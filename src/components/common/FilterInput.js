import React from 'react';

export default function FilterInput({ filterTerm, setFilterTerm }) {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="text"
        placeholder="Filtrar por ID o nombre"
        className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus-visible:outline-none text-[#444b6e]"
        value={filterTerm}
        onChange={(e) => setFilterTerm(e.target.value)}
      />
      <button className="bg-red-500 text-white px-2 py-2 ml-2 rounded-md hover:opacity-80" onClick={() => setFilterTerm('')}>
        Limpiar
      </button>
    </div>
  );
}
