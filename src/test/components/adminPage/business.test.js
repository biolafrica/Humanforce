import Business from "../../../components/adminPage/business";
import axios from "axios";
import { render,screen, fireEvent, waitFor, getByRole } from "@testing-library/react";
import { useAlert } from "../../../components/alert";

jest.mock("axios");
jest.mock("../../../components/alert", ()=>({
  useAlert : jest.fn()
}))

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));


describe("test suite: business components", ()=>{

  const mockBusiness= [{
    business_name:"Test Limited",
    business_email: "info@test.com",
    business_phone_number: 818519191681,
    business_address_I: "OL1 3FU",
    business_address_II: "OL2 3HU",
  }]

  
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
  })

  test("test case: enter business components properly", ()=>{
    render(<Business data={mockBusiness} work={mockWork}/>)

    expect(screen.getByPlaceholderText("Enter business name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter business name")).toHaveValue("Test Limited");
    expect(screen.getByPlaceholderText("Enter business email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter business email")).toHaveValue("info@test.com");


  })

  test("test case: to show successful form submission", async()=>{
    axios.post.mockResolvedValueOnce({data: {success: true}})

    render(<Business data={mockBusiness} work={mockWork}/>)

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(mockShowAlert).toHaveBeenCalledWith("Business information saved successfully!", "success");
    })


  });

  test("test case: to display error when phone number is incomplete", ()=>{
    render(<Business data={mockBusiness} work={mockWork}/>)

    const phoneInput = screen.getByPlaceholderText("Enter business phone number");

    fireEvent.change(phoneInput, {target:{value : "8186786"}});

    fireEvent.submit(screen.getByRole("form"));

    expect(screen.getByText("Minimum of eleven digits required")).toBeInTheDocument();

  })
  
  test("test case: handle server error", async()=>{
    axios.post.mockRejectedValueOnce({response: {status : 500}});

    render(<Business data={mockBusiness} work={mockWork}/>)

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(mockNavigate).toHaveBeenCalledWith("/server-error")
    })


  })


  test("test case: handle error", async()=>{
    axios.post.mockRejectedValueOnce({response: {status : 400}});

    render(<Business data={mockBusiness} work={mockWork}/>)

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(mockShowAlert).toHaveBeenCalledWith("Unsucessfull, Please try again", "error")
    })


  })
})