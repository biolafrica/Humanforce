import PayrollStaffList from "../../../components/adminPage/payrollStaffList";
import { screen, render, } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("test suite: payroll staff list components", ()=>{
  
  const mockStaff = [
    {firstname: "Abiodun", lastname: "Biobaku", employment_type: "contract", role:"software developer", salary:"50000", status:"Active", email_address: 'test@gmail.com',_id: 1},

    {firstname: "Oletubo", lastname: "David", employment_type: "contract", role:"Executives", salary:"200000", status:"Active", email_address: 'test@hotmail.com',_id: 1}
  ];

  test("test case:render staff payroll correctly", ()=>{
    render(
      <MemoryRouter>
        <PayrollStaffList user={mockStaff}/>
      </MemoryRouter>
    )

    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
    expect(screen.getByText("Oletubo David")).toBeInTheDocument();
    expect(screen.getByText("test@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Executives")).toBeInTheDocument();
    expect(screen.queryByText("Jamiu Folaji")).not.toBeInTheDocument();
  
  })

  test("test case: display empty state when no payroll users are available", ()=>{
    render(
      <MemoryRouter>
        <PayrollStaffList user={[]}/>
      </MemoryRouter>
    )

    expect(screen.getByText("No available data")).toBeInTheDocument();

  })

  test("test case: navigates to payroll staff details page on click", ()=>{
    render(
      <MemoryRouter>
        <PayrollStaffList user={mockStaff}/>
      </MemoryRouter>
    )

    const link = screen.getByText("Abiodun Biobaku").closest("a");
    expect(link).toHaveAttribute("href", "/admin/payroll/edit/contract/1")

  })
})