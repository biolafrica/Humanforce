import { render, screen, fireEvent } from "@testing-library/react";
import DashboardDetails from "../../../components/adminPage/dashboardDetails"

describe("test suite: dashboard components", ()=>{

  const mockAttendance = {
    today: [50, 30, 20],
    thisMonth: [500, 350, 150],
    thisYear: [6000, 4500, 1500],
  };

  const mockStaff = {
    allStaffCount: 100,
    contractStaffCount: 40,
    fixedStaffCount: 60,
  };

  beforeEach(()=>{
    render(<DashboardDetails attendance={mockAttendance} staff={mockStaff}/>)
  })

  test('test case: renders dashbord initial values', ()=>{
    //initial components static value
    expect(screen.getByText("Dashboard Analytics")).toBeInTheDocument();
    expect(screen.getByText("Late")).toBeInTheDocument();
    expect(screen.getByText("Attendance")).toBeInTheDocument();

    // initial attendance value
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();

    //initial staff value
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("40")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();

  });

  test("test case: update analytics when different option is selected", ()=>{

    // select this month
    const selectMonthEl = screen.getByRole("combobox");
    fireEvent.change(selectMonthEl, {target:{value: "thisMonth"}})

    expect(screen.getByText("500")).toBeInTheDocument();
    expect(screen.getByText("350")).toBeInTheDocument();
    expect(screen.getByText("150")).toBeInTheDocument();

    // select this year
    const selectYearEl = screen.getByRole("combobox");
    fireEvent.change(selectYearEl, {target:{value: "thisYear"}})

    expect(screen.getByText("6000")).toBeInTheDocument();
    expect(screen.getByText("4500")).toBeInTheDocument();
    expect(screen.getByText("1500")).toBeInTheDocument();

  })
})