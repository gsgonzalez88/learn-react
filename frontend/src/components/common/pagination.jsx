import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <nav aria-label="movie result pages">
        <ul className="pagination" style={{ justifyContent: "center" }}>
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
