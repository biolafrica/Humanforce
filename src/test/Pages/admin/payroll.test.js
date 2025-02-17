import Payroll from "../../../pages/admin/payroll"
import UseFetch from "../../../hooks/userFetch"
import { screen,render,fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

jest.mock("lottie-react", ()=>({
  __esModule : true,
  default: ()=> "LottieMockComponent"
}));

jest.mock("../../../hooks/userFetch", ()=>jest.fn());

describe('test suite: payroll components', ()=>{

  const mockStaff = [
    {firstname: "Abiodun", lastname: "Biobaku", employment_type: "contract", role:"software developer", salary:"50000", status:"Active", email_address: 'test@gmail.com'},

    {firstname: "Jamiu", lastname: "Folaji", employment_type: "fixed", role:"Operations", salary:"500000", status:"Active", email_address: 'test@yahoo.com'},

    {firstname: "Oletubo", lastname: "David", employment_type: "contract", role:"Executives", salary:"200000", status:"Active", email_address: 'test@hotmail.com'}
  ];

  beforeEach(()=>{
    UseFetch.mockReturnValue({
      data:{users:mockStaff},
      isLoading: false,
      errorMessage: null
    })
  });

  test("test case: render staff details correctly", ()=>{
    render(
      <MemoryRouter>
        <Payroll/>
      </MemoryRouter>
    )

    expect(screen.getByText("Jamiu Folaji")).toBeInTheDocument();
    expect(screen.getByText("test@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("Operations")).toBeInTheDocument();
    expect(screen.queryByText("Abiodun Biobaku")).not.toBeInTheDocument();

  });

  test("test case:  filter payroll list based on search input", ()=>{
    render(
      <MemoryRouter>
        <Payroll/>
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText("search staff");

    fireEvent.change(searchInput, {target : {value : "Abiodun"}});
    expect(screen.getByText("No available data")).toBeInTheDocument();

    fireEvent.change(searchInput, {target:{value :"Folaji"}})
    expect(screen.getByText("test@yahoo.com")).toBeInTheDocument();

  });

  test("test case: toggle between tabs correctly", ()=>{
    render(
      <MemoryRouter>
        <Payroll/>
      </MemoryRouter>
    );
    const fixedStaffBtn = screen.getByTestId("contract-btn");
    fireEvent.click(fixedStaffBtn)
    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
    expect(screen.getByText("Oletubo David")).toBeInTheDocument();
    

  });

  test("test case: display error message", ()=>{
    UseFetch.mockReturnValue({
      data: null,
      isLoading: false,
      errorMessage: {message :"An unexpected error occurred"}

    })

    render(
      <MemoryRouter>
        <Payroll/>
      </MemoryRouter>
    );
    expect(screen.getByText("An unexpected error occurred")).toBeInTheDocument();

  })
  
  test("test case: display loading", ()=>{
    UseFetch.mockReturnValue({
      data:null,
      isLoading: true,
      errorMessage: null
    });

    render(
      <MemoryRouter>
        <Payroll/>
      </MemoryRouter>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  })
})