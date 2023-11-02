import React from 'react';

export default function LazyTableHead() {
  return (
    <tr className="bg-[#1a6e6a] text-justify text-[#fefffd] hidden md:table-row">
      <th className="p-4">Id</th>
      <th className="p-4">Nombres y Apellidos</th>
      <th className="p-4">Foto</th>
      <th className="p-4">Acciones</th>
    </tr>
  );
}
