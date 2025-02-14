import StaffList from "../../../components/adminPage/staffList";
import { MemoryRouter } from "react-router-dom";
import { screen,render,fireEvent } from "@testing-library/react";

describe("test suite: staff list components", ()=>{

  const mockStaff = [
    {firstname: "Abiodun", lastname: "Biobaku", employment_type: "contract", role:"software developer", salary:"50000", status:"Active", _id: 1},

    {firstname: "Jamiu", lastname: "Folaji", employment_type: "fixed", role:"Operations", salary:"500000", status:"Sacked"},

    {firstname: "Oletubo", lastname: "David", employment_type: "contract", role:"Executives", salary:"200000", status:"Resigned"}
  ];

  test("test case: render staff details correctly", ()=>{
    render(
      <MemoryRouter>
        <StaffList users={mockStaff}/>
      </MemoryRouter>
    )

    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument()
    expect(screen.getByText("Jamiu Folaji")).toBeInTheDocument()
    expect(screen.getByText("Operations")).toBeInTheDocument()
    expect(screen.getByText("Executives")).toBeInTheDocument()
    expect(screen.getByText("Resigned")).toBeInTheDocument()
    expect(screen.getByText("Sacked")).toBeInTheDocument()
    expect(screen.getByText("fixed")).toBeInTheDocument()

  })

  test("test case: display empty state when no users are available", ()=>{
    render(
      <MemoryRouter>
        <StaffList users={[]}/>
      </MemoryRouter>
    )

    expect(screen.getByText("No available data")).toBeInTheDocument();




  })

  test("test case: navigates to staff details page on click", ()=>{
    render(
      <MemoryRouter>
        <StaffList users={mockStaff}/>
      </MemoryRouter>
    )

    const link = screen.getByText("Abiodun Biobaku").closest("a");
    expect(link).toHaveAttribute("href", "/admin/staff/1")

  })
})