import { render, screen} from "@testing-library/react";
import { act } from "react";

describe("test suite : Timer components", ()=>{
  test("render with initial values", ()=>{
    render(<Timer initialHours ={2} initialMinute = {30} initialSeconds = {15} isRunning={false} isPaused ={false} />)
    expect(screen.getByText("2:30:15")).toBeInTheDocument();
  });

})