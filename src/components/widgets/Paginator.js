import React from 'react';

export default function Paginator({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`mx-2 p-2 border border-[#1a6e6a] rounded-[50%] w-[30px] h-[30px] flex items-center justify-center ${
            currentPage === number ? 'bg-[#1a6e6a] text-white' : 'hover:bg-[#1a6e6a] hover:text-white'
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
