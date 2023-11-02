import React from 'react';

export default function LazyTableHead() {
  return (
    <tr className="bg-[#1a6e6a] text-justify text-[#fefffd]">
      <th className="p-2">Id</th>
      <th className="p-2">Nombres y Apellidos</th>
      <th className="p-2">Foto</th>
      <th className="p-2">Acciones</th>
    </tr>
  );
}
