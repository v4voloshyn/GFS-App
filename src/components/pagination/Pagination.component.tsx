import React, { FC, useState, useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { ICourseItem } from '../../types/types';

import './Pagination.scss';

interface PaginationProps {
  itemsPerPage: number;
  items: ICourseItem[];
  setPaginatedCourses: React.Dispatch<React.SetStateAction<ICourseItem[]>>;
}

export const Pagination: FC<PaginationProps> = ({
  itemsPerPage = 10,
  items = [],
  setPaginatedCourses,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentPageCourses = useMemo(() => {
    return items.slice(itemOffset, endOffset);
  }, [endOffset, itemOffset, items]);

  useEffect(() => {
    setPaginatedCourses(currentPageCourses);
  }, [currentPageCourses, setPaginatedCourses]);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  console.log('>>>> render PAGINATION');

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< Previous"
      renderOnZeroPageCount={() => null}
      activeClassName="page-active"
      pageClassName="page-link"
      nextClassName="page-next"
      previousClassName="page-previous"
      disabledClassName="page-disabled"
      breakClassName="page-break"
    />
  );
};