import React from "react";
import ReactPaginate from "react-paginate";
import style from './_Pagination.module.scss'
const Pagination = ({onChangedPage}) => {

  return (
    <div>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => onChangedPage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;