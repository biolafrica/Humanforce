import Team from "../../../pages/admin/team";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UseFetch from "../../../hooks/userFetch";
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

describe("test suite: Team component", ()=>{
  
  const mockTeams=[
    {_id: 12, staff_id: 1, team_role: "Admin"},
    {_id: 13, staff_id: 2, team_role: "Basic"}
  ];

  const mockUsers=[
    {firstname: "Abiodun", lastname: "Biobaku", email_address: "test@gmail.com", staff_code:"EU123456", _id: 1},
    {firstname: "Jamiu", lastname: "Folaji", email_address: "test@yahoo.com", staff_code:"EU123654", _id: 2},
    {firstname: "Oletubo", lastname: "David", email_address: "test@eatup.com", staff_code:"EU987654", _id: 3}
  ];

  beforeEach(()=>{
    UseFetch.mockReturnValue({
      data:{teams : mockTeams, users: mockUsers},
      isLoading: false,
      errorMessage: null
    });

    useTeam.mockReturnValue({
      team: {
        email: "test@gmail.com",
        firstname: "Abiodun",
        lastname: "Biobaku",
        role: "Admin",
      },
      AdminExclusiveButton : "inactive-btn",
      AdminNonExclusiveButton: "filled-btn"
    });


  })


  test("test case: render properly", ()=>{
    render(
      <MemoryRouter>
        <Team/>
      </MemoryRouter>
    )    
    expect(screen.getByText("Add Team")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("test@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("test@gmail.com")).toBeInTheDocument();
    expect(screen.queryByText("test@eatup.com")).not.toBeInTheDocument();
    expect(screen.getByText("EU123456")).toBeInTheDocument();
  })

  test("test case: add Team link has the right link and className", ()=>{
    render(
      <MemoryRouter>
        <Team/>
      </MemoryRouter>
    );
    
    const link = screen.getByText("Add Team").closest("a");
    expect(link).toHaveAttribute("href", "/admin/team/new");
    expect(link).toHaveAttribute('class', "inactive-btn");

  })

  test("test case: filter staff base on role", ()=>{
    render(
      <MemoryRouter>
        <Team/>
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText("search role");
    fireEvent.change(searchInput, {target:{value : "Admin"}});

    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
    expect(screen.queryByText("Jamiu Folaji")).not.toBeInTheDocument();

  })

  test("test case: display loading", ()=>{
    UseFetch.mockReturnValue({
      data:null,
      isLoading: true,
      errorMessage: null
    });

    render(
      <MemoryRouter>
        <Team/>
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
        <Team/>
      </MemoryRouter>
    );

    expect(screen.getByText("An unexpected error occurred")).toBeInTheDocument();


  })

})