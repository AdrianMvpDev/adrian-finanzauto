import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconGroup({ icons }) {
  return (
    <div className="cursor-pointer">
      {icons.map((icon, index) => (
        <div key={index} className={`${index < icons.length - 1 ? 'mr-2' : ''} inline-block`}>
          <FontAwesomeIcon icon={icon} />
        </div>
      ))}
    </div>
  );
}
