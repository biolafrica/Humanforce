import UseFetch from "../../hooks/userFetch";
import { BrowserRouter } from "react-router-dom";
import { renderHook, waitFor } from "@testing-library/react";


global.fetch =jest.fn();

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));


describe("test suite: useFetch hook", ()=>{
  const url ="https://example.com/api/data";
  const token = "token";

  afterEach(()=>{
    jest.clearAllMocks()
  })

  test("test case: to fetch successful data", async()=>{
    const mockData =[{id:1, name:"abbey", email: "test@gmail.com"}]

    fetch.mockResolvedValueOnce({
      ok:true,
      json: jest.fn().mockResolvedValueOnce(mockData)
    })

    const {result} = renderHook(()=>UseFetch(url, token),{wrapper: BrowserRouter,})

    expect(result.current.isLoading).toBe(true);

    await waitFor(()=>expect(result.current.isLoading).toBe(false));
    expect(result.current.errorMessage).toBe(null);
    expect(result.current.data).toEqual(mockData);

  });

  test("test case: to handle unauthorized admin error properly", async()=>{

    fetch.mockResolvedValueOnce({
      ok:false,
      status: 401,
      text: jest.fn().mockResolvedValueOnce("Unauthorized Admin")
    })

    const {result} = renderHook(()=>UseFetch(url, token), {wrapper: BrowserRouter})

    await waitFor(()=>{
      expect(result.current.isLoading).toBe(true)
      expect(result.current.errorMessage).toBe(null);
      expect(result.current.data).toEqual([]);
      expect(mockNavigate).toHaveBeenCalledWith("/admin/login");
    });
   ;



  })

  test("test case: to handle unauthorized user error properly", async()=>{

    fetch.mockResolvedValueOnce({
      ok:false,
      status: 403,
      text: jest.fn().mockResolvedValueOnce("Unauthorized User")
    })

    const {result} = renderHook(()=>UseFetch(url, token), {wrapper: BrowserRouter})

    await waitFor(()=>{
      expect(result.current.isLoading).toBe(true)
      expect(result.current.errorMessage).toBe(null);
      expect(result.current.data).toEqual([]);
      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });

  })

  test("test case: to handle unauthorized server error properly", async()=>{

    fetch.mockResolvedValueOnce({
      ok:false,
      status: 500,
      text: jest.fn().mockResolvedValueOnce("Server Error. Please try again later.")
    })

    const {result} = renderHook(()=>UseFetch(url, token), {wrapper: BrowserRouter})

    await waitFor(()=>{
      expect(result.current.isLoading).toBe(true)
      expect(result.current.errorMessage).toBe(null);
      expect(result.current.data).toEqual([]);
      expect(mockNavigate).toHaveBeenCalledWith("/server-error");
    });

  })

  test("test case: to handle other error properly", async()=>{

    fetch.mockResolvedValueOnce({
      ok:false,
      status: 400,
      text: jest.fn().mockResolvedValueOnce("error")
    })

    const {result} = renderHook(()=>UseFetch(url, token), {wrapper: BrowserRouter})

    await waitFor(()=>{
      expect(result.current.isLoading).toBe(true)
      expect(result.current.errorMessage).toEqual({ status: "500", message: "Error: error" });
      expect(result.current.data).toEqual([]);
    });

  })
})