import { fireEvent, render, screen } from "@testing-library/react";
import Pagination  from "../../components/pagination";
import React from "react";

describe('test suite: Pagination components', ()=>{
  test("test case: renders pagination componenets correctly", ()=>{
    render(<Pagination currentPage={1} totalPages={5} goToNextPage={jest.fn()} goToPreviousPage={jest.fn()} />);
    expect(screen.getByText(/Page 1 of 5/i)).toBeInTheDocument();
  });

  test("test case : disable previous button on first page", ()=>{
    render(<Pagination currentPage={1} totalPages={5} goToNextPage={jest.fn()} goToPreviousPage={jest.fn()} />);
    const prevBtn = screen.getByAltText("previous-icon");
    expect(prevBtn).toHaveStyle("cursor: not-allowed")
    expect(prevBtn).toHaveStyle("opacity: 0.5")
  })

  test("test case : disable next button on last page", ()=>{
    render(<Pagination currentPage={5} totalPages={5} goToNextPage={jest.fn()} goToPreviousPage={jest.fn()} />);
    const prevBtn = screen.getByAltText("next-icon");
    expect(prevBtn).toHaveStyle("cursor: not-allowed");
    expect(prevBtn).toHaveStyle("opacity: 0.5");
  })

  test("test case : call go to next page when the button is clicked", ()=>{
    const goToNextPageMock = jest.fn();
    render(<Pagination currentPage={2} totalPages={5} goToNextPage={goToNextPageMock} goToPreviousPage={jest.fn()} />);
    const nextBtn = screen.getByAltText("next-icon");
    fireEvent.click(nextBtn)
    expect(goToNextPageMock).toHaveBeenCalled()
  })
  
  test("test case : call go to previous page when the button is clicked", ()=>{
    const goToPreviousPageMock = jest.fn();
    render(<Pagination currentPage={2} totalPages={5} goToNextPage={jest.fn} goToPreviousPage={goToPreviousPageMock} />);
    const prevBtn = screen.getByAltText("previous-icon");
    fireEvent.click(prevBtn)
    expect(goToPreviousPageMock).toHaveBeenCalled()
  })

  
})