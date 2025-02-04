import { clockButton, clockButtonClass } from "../../../utils/clockButton";

describe("test suite: clock button", ()=>{

  test("test case : button return start break and inactive button", ()=>{
    const clock = {
      clock_in : "2025-02-04T15:02:27.080+00:00",
      clock_out : "2025-02-04T15:02:27.080+00:00",
      break_start : null,
      break_end : "2025-02-04T15:02:27.080+00:00"
    }
    expect(clockButton(clock)).toBe("Start Break");
    expect(clockButtonClass(clock)).toBe("inactive-btn");

  })

  test("test case : button return End work and filled button", ()=>{
    const clock = {
      clock_in : "2025-02-04T15:02:27.080+00:00",
      clock_out : null,
      break_start : "2025-02-04T15:02:27.080+00:00",
      break_end : "2025-02-04T15:02:27.080+00:00"
    }
    expect(clockButton(clock)).toBe("End Work");
    expect(clockButtonClass(clock)).toBe("filled-btn");

  })

  test("test case : button return start break and inactive button", ()=>{
    const clock = {
      clock_in : "2025-02-04T15:02:27.080+00:00",
      clock_out : "2025-02-04T15:02:27.080+00:00",
      break_start : "2025-02-04T15:02:27.080+00:00",
      break_end : "2025-02-04T15:02:27.080+00:00"
    }
    expect(clockButton(clock)).toBe("Work Completed");
    expect(clockButtonClass(clock)).toBe("inactive-btn");

  })
  

})