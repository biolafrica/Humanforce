import DoubleUseFetch from "../../hooks/doubleuseFetch";
import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("axios");

describe("test suite; double useFetch hook", ()=>{
  const urlI ="https://example.com/api/data";
  const urlII ="https://task.com/api/data";
  const token = "token";

  afterEach(()=>{
    jest.clearAllMocks();
  })

  test("test case: fetch data successfully", async()=>{
    const mockDataI =[{id:1, name:"abbey", email: "test@gmail.com"}];
    const mockDataII =[{id:2, name:"lateef", email: "test@yahoo.com"}];

    axios.get
    .mockResolvedValueOnce({data: mockDataI})
    .mockResolvedValueOnce({data: mockDataII})

    const {result} = renderHook(()=>DoubleUseFetch(urlI, urlII, token),{wrapper:BrowserRouter})

    await waitFor(()=>{
      expect(result.current.dataI).toEqual([{id:1, name:"abbey", email: "test@gmail.com"}]);
      expect(result.current.dataII).toEqual([{id:2, name:"lateef", email: "test@yahoo.com"}]);
      expect(result.current.isLoading).toBe(false)
      expect(result.current.errorMessage).toBe(null)

    })

  });

  test("test case: to handle error 401 properly", async()=>{
    axios.get.mockRejectedValueOnce(
      {status : 401, message: "Unauthorized Admin"}
    );

    const {result} = renderHook(()=>DoubleUseFetch(urlI, urlII, token),{wrapper:BrowserRouter});

    await waitFor(()=>{
      expect(result.current.dataI).toBe(null);
      expect(result.current.dataII).toBe(null);
      expect(result.current.errorMessage).toBe(null);
      expect(mockNavigate).toHaveBeenCalledWith("/admin/login")

    })

  })

  test("test case: to handle error 403 properly", async()=>{
    axios.get.mockRejectedValueOnce(
      {status : 403, message: "Unauthorized User"}
    );

    const {result} = renderHook(()=>DoubleUseFetch(urlI, urlII, token),{wrapper:BrowserRouter});

    await waitFor(()=>{
      expect(result.current.dataI).toBe(null);
      expect(result.current.dataII).toBe(null);
      expect(result.current.errorMessage).toBe(null);
      expect(mockNavigate).toHaveBeenCalledWith("/login")

    })

  })

  test("test case: to handle error 500 properly", async()=>{
    axios.get.mockRejectedValueOnce(
      {status : 500, message: "Server Error. Please try again later."}
    );

    const {result} = renderHook(()=>DoubleUseFetch(urlI, urlII, token),{wrapper:BrowserRouter});

    await waitFor(()=>{
      expect(result.current.dataI).toBe(null);
      expect(result.current.dataII).toBe(null);
      expect(result.current.errorMessage).toBe(null);
      expect(mockNavigate).toHaveBeenCalledWith("/server-error");

    })

  })

  test("test case: to handle other error  properly", async()=>{
    axios.get.mockRejectedValueOnce(
      {status : 400, message: "Error"}
    );

    const {result} = renderHook(()=>DoubleUseFetch(urlI, urlII, token),{wrapper:BrowserRouter});

    await waitFor(()=>{
      expect(result.current.dataI).toBe(null);
      expect(result.current.dataII).toBe(null);
      expect(result.current.errorMessage).toEqual({status : 400, message: "Error"});
    })

  })
})