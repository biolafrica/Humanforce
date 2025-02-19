import UsePagination from "../../hooks/usePagination";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe ("test cases: Usepagination hook", ()=>{
  const mockData = [
    {name: 'Abiodun', email: "test@hotmail.com"},
    {name: 'Lateef', email: "test@gmail.com"},
    {name: 'Biobaku', email: "test@yahoo.com"}
  ]

  test("test case:return correct value", ()=>{
    const {result} = renderHook(()=>UsePagination(mockData, 5))

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.currentData).toEqual([
      {name: 'Abiodun', email: "test@hotmail.com"},
      {name: 'Lateef', email: "test@gmail.com"},
      {name: 'Biobaku', email: "test@yahoo.com"}
    ])
    

  });

  test("test case: goToNextPage move to next page", ()=>{
    const {result} = renderHook(()=>UsePagination(mockData, 2));
    act(()=>result.current.goToNextPage());
    expect(result.current.currentPage).toBe(2)
    expect(result.current.totalPages).toBe(2)
    expect(result.current.currentData).toEqual([ {name: 'Biobaku', email: "test@yahoo.com"}])
  });

  test("test case: goToPreviousPage move to previous page", ()=>{
    const {result} = renderHook(()=>UsePagination(mockData, 2));
    act(()=>result.current.goToNextPage());
    expect(result.current.currentPage).toBe(2)
    expect(result.current.totalPages).toBe(2)
    expect(result.current.currentData).toEqual([ {name: 'Biobaku', email: "test@yahoo.com"}])

    act(()=>result.current.goToPreviousPage());
    expect(result.current.currentPage).toBe(1)
    expect(result.current.totalPages).toBe(2)
    expect(result.current.currentData).toEqual([
      {name: 'Abiodun', email: "test@hotmail.com"},
      {name: 'Lateef', email: "test@gmail.com"} 
    ])
  })

  test("test case: do not go beyond and below total pages and first page respectively", ()=>{
    const {result} = renderHook(()=>UsePagination(mockData, 3))

    // click previous for 1 page content
    act(()=>result.current.goToPreviousPage())
    expect(result.current.currentPage).toBe(1)

    // click next for 1 page content
    act(()=>result.current.goToNextPage())
    expect(result.current.currentPage).toBe(1)

  })
  
})