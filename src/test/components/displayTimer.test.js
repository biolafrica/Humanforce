import { render, screen, fireEvent, } from "@testing-library/react";
import DisplayTimer from "../../components/displayTimer";


describe("test suite: display Timer components", ()=>{
  test("render time with correct hours, minutes and seconds", ()=>{
    const timer = {
      clock_in : "2025-01-14T16:02:27.080+00:00",
      clock_out : "2025-01-14T19:00:00.000+00:00",
      break_start : null,
      break_end : null
    }
  })
})
