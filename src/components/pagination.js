const Pagination =({currentPage, totalPages, goToNextPage, goToPreviousPage})=>{

  return(
    <div className="table_footer">

      <img 
        src="/icons/Arrow left alt.svg" 
        alt="previous-icon"
        style={{
          cursor : currentPage > 1 ? "pointer" : "not-allowed",
          opacity : currentPage > 1 ? 1 : 0.5
        }}
        onClick={goToPreviousPage}
      />
      
      <h6>Page {currentPage} of {totalPages}</h6>

      <img 
        src="/icons/Arrow right alt.svg" 
        alt="next-icon"
        style={{
          cursor : currentPage < totalPages ? "pointer" : "not-allowed",
          opacity : currentPage < totalPages ? 1 : 0.5
        }}
        onClick={goToNextPage} 
      />
    
    </div>

  )
}

export default Pagination;