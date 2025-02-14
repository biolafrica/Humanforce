import Staff from "../../../pages/admin/staff";
import UseFetch from "../../../hooks/userFetch";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import useTeam from "../../../components/adminPage/buttonState";

jest.mock("../../../components/adminPage/buttonState", ()=>({
  __esModule : true,
  default: jest.fn(),
}));

jest.mock("lottie-react", ()=>({
  __esModule : true,
  default: ()=> "LottieMockComponent"
}));

jest.mock("../../../hooks/userFetch", ()=>jest.fn())


describe("test suite: staff components", ()=>{
  
 
  const mockStaff = [
    {firstname: "Abiodun", lastname: "Biobaku", employment_type: "contract", role:"software developer", salary:"50000", status:"Active", _id: 1},

    {firstname: "Jamiu", lastname: "Folaji", employment_type: "fixed", role:"Operations", salary:"500000", status:"Sacked"},

    {firstname: "Oletubo", lastname: "David", employment_type: "contract", role:"Executives", salary:"200000", status:"Resigned"}
  ];

  beforeEach(()=>{
    UseFetch.mockReturnValue({
      data :{users : mockStaff},
      isLoading : false,
      errorMessage: null
    });

    useTeam.mockReturnValue({
      team: {
        email: "test@gmail.com",
        firstname: "Abiodun",
        lastname: "Biobaku",
        role: "Admin",
      },
      AdminExclusiveButton : "filled-btn",
      AdminNonExclusiveButton: "filled-btn"
    });

    
  });


  
  test("test case: render staff details correctly ", ()=>{
    render(
      <MemoryRouter>
        <Staff/>
      </MemoryRouter>
    )

    expect(screen.getByText("Total - 3")).toBeInTheDocument();
    expect(screen.getByText("Contract - 2")).toBeInTheDocument();
    expect(screen.getByText("Fixed - 1")).toBeInTheDocument();
    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
    expect(screen.getByText("Oletubo David")).toBeInTheDocument();
    expect(screen.getByText("Resigned")).toBeInTheDocument();
  });

  test("test case: display loading", ()=>{
    UseFetch.mockReturnValue({
      data:null,
      isLoading: true,
      errorMessage: null
    });

    render(
      <MemoryRouter>
        <Staff/>
      </MemoryRouter>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  })

  test("test case: display error message", ()=>{
    UseFetch.mockReturnValue({
      data:null,
      isLoading: false,
      errorMessage: {message :"An unexpected error occurred"}
    });

    render(
      <MemoryRouter>
        <Staff/>
      </MemoryRouter>
    );

    expect(screen.getByText("An unexpected error occurred")).toBeInTheDocument();


  })

  test("test case; filter staff list based on search input", ()=>{
    render(
      <MemoryRouter>
        <Staff/>
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText("search staff");
    fireEvent.change(searchInput, {target: {value: "Abiodun"}})

    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument
    expect(screen.queryByText("Jamiu Folaji")).not.toBeInTheDocument

  })

  test("test case: toggle bettween tabs correctly", ()=>{
    render(
      <MemoryRouter>
        <Staff/>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Contract - 2"));
    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
    expect(screen.getByText("Oletubo David")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Fixed - 1"));
    expect(screen.getByText("Jamiu Folaji")).toBeInTheDocument();
    expect(screen.queryByText("Oletubo David")).not.toBeInTheDocument();
  })

  test('navigate to add staff page when click Add button', ()=>{
    render(
      <MemoryRouter>
        <Staff/>
      </MemoryRouter>
    );

    const addBtn = screen.getByRole("link", {name : /add Staff/i});
    expect(addBtn).toHaveClass("filled-btn");
    expect(addBtn).toHaveAttribute("href", "/admin/staff/new");

  })

})

