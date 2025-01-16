import { useState } from "react";

const UsePagination = (data, itemsPerPage = 5)=>{
  const [currentPage, setCurentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToNextPage = ()=>{
    if (currentPage < totalPages) setCurentPage((prev)=> prev + 1)
  };

  const goToPreviousPage = ()=>{
    if (currentPage > 1 )setCurentPage((prev)=> prev - 1)
  };

  return {currentPage, currentData, totalPages, goToNextPage,goToPreviousPage }

}