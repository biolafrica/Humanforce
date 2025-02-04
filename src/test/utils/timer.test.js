import { render, screen} from "@testing-library/react";
import Timer from "../../utils/timer";
import { act } from "react";

describe("test suite : Timer components", ()=>{
  test("render with initial values", ()=>{
    render(<Timer initialHours ={2} initialMinute = {30} initialSeconds = {15} isRunning={false} isPaused ={false} />)
    expect(screen.getByText("02:30:15")).toBeInTheDocument();
  });

  test("increment seconds when running", ()=>{
    jest.useFakeTimers();
    render(<Timer initialHours ={1} initialMinute = {10} initialSeconds = {15} isRunning={true} isPaused ={false} />)
    act(()=>{
      jest.advanceTimersByTime(1000)
    });
    expect(screen.getByText("01:10:16")).toBeInTheDocument();

    act(()=>{
      jest.advanceTimersByTime(2000)
    });
    expect(screen.getByText("01:10:18")).toBeInTheDocument();

    jest.useRealTimers();
  })

  test("does not increase when paused", ()=>{
    jest.useFakeTimers();
    render(<Timer initialHours ={1} initialMinute = {10} initialSeconds = {15} isRunning={false} isPaused ={true} />)
    act(()=>{
      jest.advanceTimersByTime(1000)
    });
    expect(screen.getByText("01:10:15")).toBeInTheDocument();
    jest.useRealTimers();
  })

  test("resume correctly after been paused", ()=>{
    jest.useFakeTimers();
    const {rerender} = render(<Timer initialHours ={1} initialMinute = {10} initialSeconds = {15} isRunning={false} isPaused ={true} />)
    act(()=>{
      jest.advanceTimersByTime(3000)
    });
    expect(screen.getByText("01:10:15")).toBeInTheDocument();

    rerender(<Timer initialHours ={1} initialMinute = {10} initialSeconds = {15} isRunning={true} isPaused ={false} />)
    act(()=>{
      jest.advanceTimersByTime(2000)
    });
    expect(screen.getByText("01:10:17")).toBeInTheDocument();
    jest.useRealTimers()

  })

})