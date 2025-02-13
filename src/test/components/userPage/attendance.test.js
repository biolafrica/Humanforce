import Attendance from "../../../components/userPage/attendance";
import performance from "../../../utils/performance";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("test suite : Attendance components", ()=>{

  const mockAttendance = {
    "January 2025":[
      {
        clock_in : "2025-01-04T15:02:27.080+00:00",
        clock_out : "2025-01-04T15:02:27.080+00:00",
        break_start : "2025-01-04T15:02:27.080+00:00",
        break_end : "2025-01-04T15:02:27.080+00:00",
        status: "early"
      },
      {
        clock_in : "2025-01-05T15:02:27.080+00:00",
        clock_out : "2025-01-05T15:02:27.080+00:00",
        break_start : "2025-01-05T15:02:27.080+00:00",
        break_end : "2025-01-05T15:02:27.080+00:00",
        status: "early"
      }
    ],
    "February 2025":[
      {
        clock_in : "2025-02-04T15:02:27.080+00:00",
        clock_out : "2025-02-04T15:02:27.080+00:00",
        break_start : "2025-02-04T15:02:27.080+00:00",
        break_end : "2025-02-04T15:02:27.080+00:00",
        status: "late"
      }
    ]
  };

  test("test case; change attendance data when selecting new month", ()=>{
    render
    (
      <MemoryRouter>
        (<Attendance attendance={mockAttendance} />)
      </MemoryRouter>
    )

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, {target: {value: "February 2025"}})
    expect(selectElement).toHaveValue("February 2025")
    
  })

  test("test case; default value to empty current month", ()=>{

    const att = {
      "January 2025":[
        {
          clock_in : "2025-01-04T15:02:27.080+00:00",
          clock_out : "2025-01-04T15:02:27.080+00:00",
          break_start : "2025-01-04T15:02:27.080+00:00",
          break_end : "2025-01-04T15:02:27.080+00:00",
          status: "early"
        },
        {
          clock_in : "2025-01-05T15:02:27.080+00:00",
          clock_out : "2025-01-05T15:02:27.080+00:00",
          break_start : "2025-01-05T15:02:27.080+00:00",
          break_end : "2025-01-05T15:02:27.080+00:00",
          status: "early"
        }
      ]
    };

    render
    (
      <MemoryRouter>
        (<Attendance attendance={att} />)
      </MemoryRouter>
    )
    const currentMonth = new Date().toLocaleString('default',{month: 'long', year:'numeric'});
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveValue(currentMonth);
    
  })

  test("test case; display correct performance icon and text", ()=>{
    render
    (
      <MemoryRouter>
        (<Attendance attendance={mockAttendance} />)
      </MemoryRouter>
    )

    const performaceImage = screen.getByAltText('performance-emoji');
    expect(performaceImage).toHaveAttribute("src", 'icons/Bad.svg');
    
  })
})