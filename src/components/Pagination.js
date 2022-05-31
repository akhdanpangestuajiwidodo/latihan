import React, { useState } from "react";

function Pagination({
  data,
  RenderComponent,
  pageLimit,
  dataLimit,
  setCurrentPage,
}) {
  //   const [pages] = useState(Math.round(data.length / dataLimit));
  const [pageGroup, setPageGroup] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = pageGroup * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  //bikin group number pagination misal 1-5
  const getPaginationGroup = () => {
    let start = Math.floor((pageGroup - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      {/* show the posts, 20 posts at a time */}
      <tr>
        {getPaginatedData().map((d, id) => (
          <RenderComponent key={id} data={d} />
        ))}
      </tr>

      <div className="pagination">
        {/* previous button */}
        <button onClick={goToPreviousPage}>prevPage</button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button key={index} onClick={changePage}>
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button onClick={goToNextPage}>nextPage</button>
      </div>
    </div>
  );
}

export default Pagination;
