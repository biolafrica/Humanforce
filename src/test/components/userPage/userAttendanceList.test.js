import UserAttendancelist from "../../../components/userPage/userAttendanceList";
import UsePagination from "../../../hooks/usePagination";
import Empty from "../../../components/empty";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("test suite: user attendance List Components", ()=>{
  test("test case : to check rendering of attendance data", ()=>{

    const mockAttendance = [
      {
        clock_in : "2025-01-04T10:02:24.080+00:00",
        clock_out : "2025-01-04T15:02:24.080+00:00",
        break_start : "2025-01-04T12:02:24.080+00:00",
        break_end : "2025-01-04T15:13:24.080+00:00",
        hours: 7,
        status: "early"
      },
      {
        clock_in : "2025-01-05T09:02:27.080+00:00",
        clock_out : "2025-01-05T14:02:27.080+00:00",
        break_start : "2025-01-05T10:02:27.080+00:00",
        break_end : "2025-01-05T11:02:27.080+00:00",
        hours: 8,
        status: "late"
      }
    ];

    render
    (
      <MemoryRouter>
        <UserAttendancelist attendance={mockAttendance}/>
      </MemoryRouter>
    )

    expect (screen.getByText('04 - 01 - 2025')).toBeInTheDocument();
    expect (screen.getByText('10 : 02 : 24')).toBeInTheDocument();
    expect (screen.getByText('15 : 02 : 24')).toBeInTheDocument();
    expect (screen.getByText("7")).toBeInTheDocument();
    expect (screen.getByText("early")).toBeInTheDocument();
   
    

  });

  test("test case:  render empty attendance array", ()=>{
    render
    (
      <MemoryRouter>
        <UserAttendancelist attendance={[]}/>
      </MemoryRouter>
    );

    expect(screen.getByText('No available data')).toBeInTheDocument();
  })

  test("test case: render correct link for each attendance item", ()=>{
    const mockAttendance = [
      {
        clock_in : "2025-01-04T10:02:24.080+00:00",
        clock_out : "2025-01-04T15:02:24.080+00:00",
        break_start : "2025-01-04T12:02:24.080+00:00",
        break_end : "2025-01-04T15:13:24.080+00:00",
        hours: 7,
        status: "early",
        _id: 1
      },
    ];

    render
    (
      <MemoryRouter>
        <UserAttendancelist attendance={mockAttendance}/>
      </MemoryRouter>
    )

    const linkElement = screen.getByRole("link", {name: /clock in:/i});
    expect(linkElement).toHaveAttribute("href", "/clock/1");

  })
})