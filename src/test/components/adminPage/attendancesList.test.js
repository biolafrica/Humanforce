import { MemoryRouter } from "react-router-dom";
import AttendancesList from "../../../components/adminPage/attendancesList";
import { render,screen } from "@testing-library/react";
import formatNaira from "../../../utils/formatNaira";

describe("test suite: attendances components", ()=>{
  const mockAttendance = 
    [
      {
        clock_in : "2025-01-04T15:02:27.080+00:00",
        clock_out : "2025-01-04T19:02:27.080+00:00",
        break_start : "2025-01-04T17:02:27.080+00:00",
        break_end : "2025-01-04T18:02:27.080+00:00",
        status: "early",
        staff_code:"EU123456",
        late_fine:0,
        hours: 8,
        createdAt:"2025-01-04T15:02:27.080+00:00"
      },
      {
        clock_in : "2025-01-05T10:03:24.080+00:00",
        clock_out : "2025-01-05T17:03:24.080+00:00",
        break_start : "2025-01-05T11:03:24.080+00:00",
        break_end : "2025-01-05T12:03:24.080+00:00",
        status: "early",
        staff_code:"EU148456",
        late_fine:0,
        hours: 5,
        createdAt:"2025-01-05T10:03:24.080+00:00"
      },
      {
        clock_in : "2025-01-06T08:03:21.080+00:00",
        clock_out : "2025-01-06T12:06:23.080+00:00",
        break_start : "2025-01-06T09:04:29.080+00:00",
        break_end : "2025-01-06T10:09:24.080+00:00",
        status: "late",
        staff_code:"EU123456",
        late_fine:500,
        hours: 7,
        createdAt:"2025-01-06T08:03:21.080+00:00"
      }
  ];

  const mockStaff=[
    {
      _id: 1,
      firstname: "Abiodun",
      lastname: "Biobaku",
      role: "Software Engineer",
      staff_code: "EU123456"
    },
    {
      _id: 2,
      firstname: "Adediji",
      lastname: "Olamide",
      role: "Musician",
      staff_code: "EU148456"
    },

  ];

  test("test case; render user details correctly", ()=>{

    render
    (
      <MemoryRouter>
        <AttendancesList attendances={mockAttendance} users={mockStaff}/>
      </MemoryRouter>
    )

    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Adediji Olamide")).toBeInTheDocument();
    expect(screen.getByText("Musician")).toBeInTheDocument();
 
  })

  test("test case: calculate and display total hours, total fine and percentage early correctly", ()=>{
    render(
      <MemoryRouter>
        <AttendancesList attendances={mockAttendance} users={mockStaff}/>
      </MemoryRouter>
    );

    //Total Hours
    expect(screen.getByText(15)).toBeInTheDocument()
    expect(screen.getByText(5)).toBeInTheDocument()

    //Total Fine
    expect(screen.getByText(formatNaira(500))).toBeInTheDocument();
    expect(screen.getByText(formatNaira(0))).toBeInTheDocument();

    //Percentage early
    expect(screen.getByText("50%")).toBeInTheDocument()
    expect(screen.getByText("100%")).toBeInTheDocument()

  })

  test("test case: apply correct styling for early and late statuses", ()=>{
    render(
      <MemoryRouter>
        <AttendancesList attendances={mockAttendance} users={mockStaff}/>
      </MemoryRouter>
    );

    expect(screen.getByText("50%").classList).toContain("late")
    expect(screen.getByText("100%").classList).toContain("early")
    

  })

  test('test case: displays empty state in the absence attendance record', ()=>{
    render(
      <MemoryRouter>
        <AttendancesList attendances={[]} users={mockStaff}/>
      </MemoryRouter>
    );

    expect(screen.getByText("No available data")).toBeInTheDocument();
  })

  test("test case: correctly generates monthYear in the link URL", ()=>{
    render(
      <MemoryRouter>
        <AttendancesList attendances={mockAttendance} users={mockStaff}/>
      </MemoryRouter>
    );

    const link = screen.getByText("Abiodun Biobaku").closest("a");
    expect(link).toHaveAttribute("href", expect.stringContaining("monthYear=January%202025"))

  })
})