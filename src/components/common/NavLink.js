import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, text }) {
  const location = useLocation();

  return (
    <li>
      <Link to={to} className={`hover:text-[#1a6e6a] ${location.pathname === to ? 'font-bold text-[#1a6e6a]' : 'text-[#444b6e] '}`}>
        {text}
      </Link>
    </li>
  );
}
