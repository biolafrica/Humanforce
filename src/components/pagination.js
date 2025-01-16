import { useState, useEffect } from "react";


const Pagination =({currentPage, totalPages, goToNextPage, goToPreviousPage})=>{

  return(
    <div className="table_footer">

      <button 
        className="left_arrow" 
        style={{cursor : currentPage > 1 ? "pointer" : "not-allowed" }}
        onClick={goToPreviousPage}
      >
        <img src="/icons/Arrow left alt.svg" alt="previous-icon" />
        <h4>Previous</h4>
      </button>
      
      <h4>Page {currentPage} of {totalPages}</h4>

      <button 
        className="right_arrow" 
        style={{cursor : currentPage > totalPages ? "pointer" : "not-allowed" }}
        onClick={goToNextPage}
      >
        <h4>Next</h4>
        <img src="/icons/Arrow right alt.svg" alt="next-icon" />
      </button>
      
    </div>

  )
}

export default Pagination;