import FixedStaffDisplay from "../../../components/adminPage/fixedStaffDisplay"
import { MemoryRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"

describe("test suite:", ()=>{
  const mockPayroll={
    "February 2024":[
      { basic_pay: 50000, lateness_fine: 5000,loan: 5000, bonuses: 2000, pension: 47000, createdAt: "2024-02-11T09:54:44.823Z", deductions: 1000, net_pay:30000 },
    ],

    "January 2024":[
      { basic_pay: 55000, lateness_fine: 6000, loan: 5000, bonuses: 2500, pension: 51500, createdAt: "2024-01-11T09:54:44.823Z", deductions: 100, net_pay:3000 },
    ]
  }

  test("test case: render component properly", ()=>{
    render(
      <MemoryRouter>
        <FixedStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();

  });

  test("test case: correct initial month in dropdown", ()=>{
    render(
      <MemoryRouter>
        <FixedStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
    const currentMonth = new Date().toLocaleString("default", {
      month: 'long', 
      year: "numeric"
    });
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveValue(currentMonth);

  })

  test("test case: update payroll data when new month is selected", ()=>{
    render(
      <MemoryRouter>
        <FixedStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
    const dropdown = screen.getByRole("combobox");
    fireEvent.change(dropdown, {target: {value : "February 2024"}});

    expect(dropdown).toHaveValue("February 2024");

    //displays paidStaff component for past month
    expect(screen.getByTestId("paid_staff")).toBeInTheDocument();
    
    
  })

  test("test case: displays unpaid staff component for current month", ()=>{

    render(
      <MemoryRouter>
        <FixedStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
    expect(screen.getByTestId("unpaid_staff")).toBeInTheDocument();

  })
})