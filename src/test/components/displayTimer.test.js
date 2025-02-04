import { render, screen} from "@testing-library/react";
import DisplayTimer from "../../components/displayTimer";


describe("test suite: display Timer components", ()=>{

  test("render timer when only clock_in is present", ()=>{
    const time = {
      clock_in : "2025-02-04T15:02:27.080+00:00",
      clock_out : null,
      break_start : null,
      break_end : null
    }
    render(<DisplayTimer time ={time}/>)
    expect(screen.getByText(/:/)).toBeInTheDocument();
  })

  test("render paused timer when on break", ()=>{
    const time = {
      clock_in : "2025-02-04T11:02:27.080+00:00",
      clock_out : null,
      break_start : "2025-02-04T15:02:27.080+00:00",
      break_end : null
    }

    render(<DisplayTimer time={time}/>)
    expect(screen.getByText("04:00:00")).toBeInTheDocument();
  })

  test("render running timer after break ends", ()=>{
    const time = {
      clock_in : "2025-02-04T11:02:27.080+00:00",
      clock_out : null,
      break_start : "2025-02-04T15:02:27.080+00:00",
      break_end : "2025-02-04T16:02:27.080+00:00",
    }

    render(<DisplayTimer time={time}/>)
    expect(screen.getByText(/:/)).toBeInTheDocument();

  })

  test("render paused timer when user clockout", ()=>{
    const time = {
      clock_in : "2025-02-04T11:02:27.080+00:00",
      clock_out : "2025-02-04T19:02:27.080+00:00",
      break_start : "2025-02-04T15:02:27.080+00:00",
      break_end : "2025-02-04T16:02:27.080+00:00",
    }
    render(<DisplayTimer time={time}/>)
    expect(screen.getByText("07:00:00")).toBeInTheDocument();
  });

  test("render paused timer when system clockout user without clicking on start break", ()=>{
    const time = {
      clock_in : "2025-02-04T11:02:27.080+00:00",
      clock_out : "2025-02-04T19:02:27.080+00:00",
      break_start : null,
      break_end : null,
    }
    render(<DisplayTimer time={time}/>)
    expect(screen.getByText("08:00:00")).toBeInTheDocument();

  })

  test("render paused timer when system clockout user without clicking on end break", ()=>{
    const time = {
      clock_in : "2025-02-04T11:02:27.080+00:00",
      clock_out : "2025-02-04T19:02:27.080+00:00",
      break_start: "2025-02-04T15:02:27.080+00:00",
      break_end : null,
    }
    render(<DisplayTimer time={time}/>)
    expect(screen.getByText("08:00:00")).toBeInTheDocument();

  })
})
