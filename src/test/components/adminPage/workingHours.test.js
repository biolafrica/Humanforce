import WorkingHours from "../../../components/adminPage/workingHours";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { useAlert } from "../../../components/alert";
import { MemoryRouter } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { act } from "react";

jest.mock("axios")
jest.mock("../../../components/alert", ()=>({
  useAlert : jest.fn()
}))

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("test suite:", ()=>{

  const mockWork= {
    workingHours:[
      {
        days: {
          sunday: { open: "08:10", close: "17:10", isClosed: true },
          monday: { open: "10:00", close: "19:00", isClosed: false },
          tuesday: { open: "10:20", close: "19:10", isClosed: false },
          wednesday: { open: "10:30", close: "19:20", isClosed: false },
          thursday: { open: "10:40", close: "19:30", isClosed: false },
          friday: { open: "11:00", close: "17:20", isClosed: false },
          saturday: { open: "08:00", close: "17:00", isClosed: true },
        },
      },

    ],
  
  };

  const mockShowAlert = jest.fn();

  beforeEach(()=>{
    useAlert.mockReturnValue({
      alert:{visible: false, message: "", type: ""},
      showAlert: mockShowAlert
    });

    jest.clearAllMocks();

  });

  test("test case: display initially properly",()=>{
    render(<WorkingHours work={mockWork}/>)

    //static text display
    expect(screen.getByText("sunday")).toBeInTheDocument();
    expect(screen.getByText("monday")).toBeInTheDocument();

    // opened time value display
    expect(screen.getByDisplayValue("10:00")).toBeInTheDocument();
    expect(screen.getByDisplayValue("19:00")).toBeInTheDocument();

    //closed time value display
    expect(screen.queryByDisplayValue("08:00")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("17:10")).not.toBeInTheDocument();

  });

  test("test case: checkbox toggle ", ()=>{
    render(<WorkingHours work={mockWork}/>)

    const checkbox = screen.getAllByRole("checkbox")[0];
    expect(checkbox.checked).toBe(true);
    expect(screen.queryByDisplayValue("08:10")).not.toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
    expect(screen.getByDisplayValue("08:10")).toBeInTheDocument();

  })

  test("test case: updating inputs correctly(open)", ()=>{
    render(<WorkingHours work={mockWork}/>)

    const openInput = screen.getAllByRole("crombobox")[1];
    expect(openInput).toHaveValue("10:20");

    fireEvent.change(openInput, {target:{value: "10:55"}})
    expect(openInput).toHaveValue("10:55");


  });

  test("send correct data to backend", async()=>{
    axios.post.mockResolvedValueOnce({data:{message : "Success"}})
    render(<WorkingHours work={mockWork}/>)

    const submitBtn = screen.getByRole("button", {name: /submit/i})
    fireEvent.click(submitBtn);

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API_URL}/admin/working-hours`,
        {days: mockWork.workingHours[0].days },
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: expect.stringContaining("Bearer null")
          })
        })
      )
      expect(mockShowAlert).toHaveBeenCalledWith("working hours saved successfully!", "success")
    })


  })

  test("test case: handle server error correctly", async()=>{
    axios.post.mockRejectedValueOnce({response:{status : 500}})
    render(<WorkingHours work={mockWork}/>);

    const submitBtn = screen.getByRole("button", {name: /submit/i})
    fireEvent.click(submitBtn);

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/server-error");
   
    })


  })

  test("test case: handle general error correctly", async()=>{
    axios.post.mockRejectedValueOnce({response:{status : 400}})
    render(<WorkingHours work={mockWork}/>);

    const submitBtn = screen.getByRole("button", {name: /submit/i})
    fireEvent.click(submitBtn);

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockShowAlert).toHaveBeenCalledWith("Error saving working hours", "error");
   
    })


  })

  
})