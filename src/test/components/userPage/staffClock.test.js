import { render, screen } from "@testing-library/react";
import StaffClock from "../../../components/userPage/staffClock";

describe("Test suite: staff clock components", ()=>{
  
  test("test case: render clock-in when user clocked in ", ()=>{
    const clock = {
      clock_in : "2025-02-04T15:02:27.080+00:00",
      clock_out : null,
      break_start : null,
      break_end : null
    }
    render(<StaffClock clock={clock}/>)
    expect(screen.getByText("15 : 02")).toBeInTheDocument();
  })

  test("test case: render break_start when user start break ", ()=>{
    const clock = {
      clock_in : "2025-02-04T15:02:27.080+00:00",
      clock_out : null,
      break_start : "2025-02-04T16:02:27.080+00:00",
      break_end : null
    }

    render(<StaffClock clock={clock}/>)
    expect(screen.getByText("16 : 02")).toBeInTheDocument();
  
  })

  test("test case: to check if element will null value are hidden",()=>{
    const clock = {
      clock_in : "2025-02-04T15:02:27.080+00:00",
      clock_out : null,
      break_start : null,
      break_end : null
    }

    render(<StaffClock clock={clock}/>);
    expect(document.querySelector(".clock_out")).toHaveClass("none");
    expect(document.querySelector(".break_end")).toHaveClass("none");
    expect(document.querySelector(".break_start")).toHaveClass("none");

  })

})