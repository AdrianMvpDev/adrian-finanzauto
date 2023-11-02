import React from 'react';

export default function LazyTableHead() {
  return (
    <tr className="text-justify text-[#fefffd] hidden md:table-row">
      <th className="py-4 px-2 bg-[#1a6e6a] rounded-s-lg	">Id</th>
      <th className="py-4 px-2 bg-[#1a6e6a]">Nombres y Apellidos</th>
      <th className="py-4 px-2 bg-[#1a6e6a]">Foto</th>
      <th className="py-4 px-2 bg-[#1a6e6a] rounded-e-lg">Acciones</th>
    </tr>
  );
}
