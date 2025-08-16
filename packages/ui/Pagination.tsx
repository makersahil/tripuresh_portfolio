import React from 'react';

export interface PaginationProps {
  /** Current page index (1-based) */
  page: number;
  /** Total number of records */
  total: number;
  /** Number of records per page */
  perPage: number;
  /** Callback invoked when the page changes */
  onChange: (page: number) => void;
}

/**
 * A simple pagination component. It shows previous/next buttons along with
 * individual page numbers. Pages are 1-based. If there is only one page the
 * component renders nothing.
 */
const Pagination: React.FC<PaginationProps> = ({ page, total, perPage, onChange }) => {
  const pageCount = Math.ceil(total / perPage);
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <div className="flex items-center space-x-2 my-4">
      <button
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 border rounded ${p === page ? 'bg-blue-600 text-white' : ''}`}
        >
          {p}
        </button>
      ))}
      <button
        disabled={page >= pageCount}
        onClick={() => onChange(page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
