import React from 'react';
import IconGroup from '../common/IconGroup';
import { faPen, faTrash, faBookReader } from '@fortawesome/free-solid-svg-icons';

export default function LazyTableBody({ data }) {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id} className="border-b text-justify text-[#444b6e]">
          <td className="p-2">{item.id}</td>
          <td className="p-2 capitalize">{`${item.title} ${item.firstName} ${item.lastName}`}</td>
          <td className="p-2">
            <img
              src={item.picture}
              alt={`${item.title} ${item.firstName} ${item.lastName}`}
              className="max-w-[30px] max-h-[30px] w-auto h-auto rounded-full"
            />
          </td>
          <td className="cursor-pointer">
            <IconGroup icons={[faTrash, faPen, faBookReader]} />
          </td>
        </tr>
      ))}
    </>
  );
}
