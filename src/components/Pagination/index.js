import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styles from "./styles.module.scss";
const PaginationComponent = ({ length, sortPageFunc }) => {
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    // getTodosFunction(pageNumber);
      console.log("pageNumber", pageNumber)
      sortPageFunc(pageNumber, null)
  };
  return (
    <div className={styles.container}>
      <Pagination
        activeClass={styles.active}
        activeLinkClass={styles.link}
        itemClass={styles.li}
        innerClass={styles.pagin}
        activePage={activePage}
        itemsCountPerPage={3}
        totalItemsCount={length}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComponent;
