import Attendances from "../../../components/adminPage/attendances";
import { MemoryRouter } from "react-router-dom";
import { render,screen,fireEvent } from "@testing-library/react";

describe("test suite: attendances components", ()=>{
  test("test case", ()=>{
    
    const mockAttendance = {

      "January 2025":[
        {
          clock_in : "2025-01-04T15:02:27.080+00:00",
          clock_out : "2025-01-04T15:02:27.080+00:00",
          break_start : "2025-01-04T15:02:27.080+00:00",
          break_end : "2025-01-04T15:02:27.080+00:00",
          status: "early",
          staff_code:"EU123456",
          late_fine:0,
          hours: 8
        },
        {
          clock_in : "2025-01-05T15:02:27.080+00:00",
          clock_out : "2025-01-05T15:02:27.080+00:00",
          break_start : "2025-01-05T15:02:27.080+00:00",
          break_end : "2025-01-05T15:02:27.080+00:00",
          status: "early",
          staff_code:"EU148456",
          late_fine:0,
          hours: 5
        }
      ],

      "February 2025":[
        {
          clock_in : "2025-02-04T15:02:27.080+00:00",
          clock_out : "2025-02-04T15:02:27.080+00:00",
          break_start : "2025-02-04T15:02:27.080+00:00",
          break_end : "2025-02-04T15:02:27.080+00:00",
          status: "late",
          staff_code:"EU123456",
          late_fine:500,
          hours: 7
        }
      ]

    };

    render
    (
      <MemoryRouter>
        (<Attendances attendances={mockAttendance} />)
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
          status: "early",
          staff_code:"EU123456",
          late_fine:0,
          hours: 8
        },
        {
          clock_in : "2025-01-05T15:02:27.080+00:00",
          clock_out : "2025-01-05T15:02:27.080+00:00",
          break_start : "2025-01-05T15:02:27.080+00:00",
          break_end : "2025-01-05T15:02:27.080+00:00",
          status: "early",
          staff_code:"EU148456",
          late_fine:0,
          hours: 5
        }
      ]
    };

    render
    (
      <MemoryRouter>
        (<Attendances attendances={att} />)
      </MemoryRouter>
    )
    const currentMonth = new Date().toLocaleString('default',{month: 'long', year:'numeric'});
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveValue(currentMonth);
    
  })
})