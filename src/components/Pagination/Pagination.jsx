import React from "react";
import ReactPaginate from "react-paginate";
import style from './_Pagination.module.scss'
const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => console.log(e)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;