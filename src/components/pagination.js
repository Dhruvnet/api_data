import React from 'react';

export const Pagination = ({ pageCount, onPageChange, currentPage }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < pageCount; i++) {
      pageNumbers.push(
        <a
          key={i}
          className={`relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-700 border border-black text-sm transition-all duration-300 ${
            currentPage === i
              ? 'text-white'
              : 'text-white'
          } hover:bg-neutral-100 hover:text-black dark:text-white dark:hover:bg-indigo-700 dark:hover:text-white`}
          onClick={() => onPageChange({ selected: i })}
        >
          {i + 1}
        </a>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {getPageNumbers()}
    </div>
  );
};
