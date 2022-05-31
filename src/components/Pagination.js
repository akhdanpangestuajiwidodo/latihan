import React, { useState } from "react";

function Pagination({
  data,
  RenderComponent,
  pageLimit,
  dataLimit,
  setCurrentPage,
  goToNextPage,
  goToPreviousPage,
}) {
  const [pageGroup, setPageGroup] = useState(1);

  const getPaginatedData = () => {
    const startIndex = pageGroup * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      {/* show the posts, 20 posts at a time */}
      <div>
        {getPaginatedData().map((d, id) => (
          <RenderComponent key={id} data={d} />
        ))}
      </div>
    </div>
    //   <div className="pagination">
    //   {/* previous button */}
    //   <button onClick={goToPreviousPage}>prevPage</button>

    //   {/* show page numbers */}
    //   {getPaginationGroup().map((item, index) => (
    //     <button key={index} onClick={changePage}>
    //       <span>{item}</span>
    //     </button>
    //   ))}

    //   {/* next button */}
    //   <button onClick={goToNextPage}>nextPage</button>
    // </div>
  );
}

export default Pagination;
