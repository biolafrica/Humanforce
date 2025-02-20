import HomeClicks from "../../../components/userPage/homeClick";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useAlert } from "../../../components/alert";
import axios from "axios";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios")
jest.mock("../../../components/alert", ()=>({
  useAlert : jest.fn()
}))

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));


describe("test suite: home click comnponent", ()=>{

  const mockWorkingHours =[
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

  ]

  const mockClosedDay =[
    {
      days: {
        sunday: { open: "08:10", close: "17:10", isClosed: true },
        monday: { open: "10:00", close: "19:00", isClosed: true },
        tuesday: { open: "10:20", close: "19:10", isClosed: true },
        wednesday: { open: "10:30", close: "19:20", isClosed: true },
        thursday: { open: "10:40", close: "19:30", isClosed: true },
        friday: { open: "11:00", close: "17:20", isClosed: true },
        saturday: { open: "08:00", close: "17:00", isClosed: true },
      },
    },

  ]

  const mockBusiness= [{
    business_name:"Test Limited",
    business_email: "info@test.com",
    business_phone_number: 818519191681,
    business_address_I: "OL1 3FU",
    business_address_II: "OL2 3HU",
  }]


  const mockShowAlert = jest.fn();

  beforeEach(()=>{
    useAlert.mockReturnValue({
      alert:{visible: false, message: "", type: ""},
      showAlert: mockShowAlert
    });

    jest.clearAllMocks();

  });

  test('test cases: prevent clocking in on a closed day', ()=>{
    
    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockClosedDay}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("Start Work"));
    expect(mockShowAlert).toHaveBeenCalledWith("we are not operational today", "info");

  })

  test("test cases: prevent clocking out on a closed day", ()=>{

    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockClosedDay}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("End Work"));
    expect(mockShowAlert).toHaveBeenCalledWith("we are not operational today", "info");

  })


  test("test cases: prevent clocking out on a closed day", async()=>{
    axios.post.mockResolvedValueOnce({data :{message: "You are yet to clock in" }})

    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockWorkingHours}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("End Work"));
    await waitFor(()=>{
      expect(mockShowAlert).toHaveBeenCalledWith("You are yet to clock in", "info")
    })

  })

  test("test cases: redirects user after succesful clock-in", async()=>{
    axios.post.mockResolvedValueOnce({data :{ id: "12345" }})

    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockWorkingHours}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("Start Work"));
    
    await waitFor(()=>{
      expect(mockNavigate).toHaveBeenCalledWith("/clock/12345")
    })

  })

  test("test cases: redirects user after succesful clock-in", async()=>{
    axios.post.mockResolvedValueOnce({data :{ id: "54321" }})

    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockWorkingHours}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("End Work"));
    
    await waitFor(()=>{
      expect(mockNavigate).toHaveBeenCalledWith("/clock/54321");
    })

  })

  test("test cases: handle server error during clock-in", async()=>{
    axios.post.mockRejectedValueOnce({response :{ status: 500 }})

    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockWorkingHours}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("Start Work"));
    
    await waitFor(()=>{
      expect(mockNavigate).toHaveBeenCalledWith("/server-error");
    })

  })

  test("test cases: handle server error during clock-in", async()=>{
    axios.post.mockRejectedValueOnce({response :{ status: 500 }})

    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockWorkingHours}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("End Work"));
    
    await waitFor(()=>{
      expect(mockNavigate).toHaveBeenCalledWith("/server-error");
    })

  })

  test("test cases: ensure payslip buttons work",()=>{
    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockWorkingHours}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("Payslip"));

    expect(screen.getByText("Payslip").closest("a")).toHaveAttribute("href", "/Payslip");
  })


  test("test cases: ensure attendance buttons work",()=>{
    render(
      <MemoryRouter>
        <HomeClicks business={mockBusiness} workingHours={mockWorkingHours}/>
      </MemoryRouter>
  
    )

    fireEvent.click(screen.getByText("Attendance"));
    expect(screen.getByText("Attendance").closest("a")).toHaveAttribute("href", "/Attendance");

  })

  
})