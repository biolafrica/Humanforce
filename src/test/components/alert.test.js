import { AlertPopup, useAlert } from "../../components/alert";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { act } from "react";

jest.useFakeTimers();

describe("test suite: alert components", ()=>{
  describe("test suite: AlertPopup components", ()=>{

    test("test case: does not render when visible is false ", ()=>{
      render(<AlertPopup message="Test message" type="success" visible={false}/>);
      expect(screen.queryByText("Test message")).not.toBeInTheDocument();
    });

    test("test case: render with correct message and type ", ()=>{
      render(<AlertPopup message="Success" type="success" visible={true}/>);
      expect(screen.getByText("Success")).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveAttribute("src", "/icons/success.svg");

    });

    test("test case: render with correct error type ", ()=>{
      render(<AlertPopup message="Error occured" type="error" visible={true}/>);
      expect(screen.getByText("Error occured")).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveAttribute("src", "/icons/error.svg");
    });

  })

  
  describe("test suite: useAlert hook", ()=>{
    test("test case: initial state is invisible with empty message", ()=>{
      const {result} = renderHook(()=> useAlert())

      expect(result.current.alert).toEqual({
        visible: false,
        message: "",
        type: "success",
      })
    })

    test("test case: showAlert updates alert state ", ()=>{
      const {result} = renderHook(()=> useAlert())

      act(()=>{
        result.current.showAlert("Test Alert", "info")
      })

      expect(result.current.alert).toEqual({
        visible: true,
        message: "Test Alert",
        type: "info",
      })
    })
    test("test case: initial state is invisible with empty message", ()=>{
      const {result} = renderHook(()=> useAlert())

      act(()=>{
        result.current.showAlert("Auto-dismiss Alert", "info")
      })

      expect(result.current.alert.visible).toBe(true);

      act(()=>{
        jest.advanceTimersByTime(2000);
      })

      expect(result.current.alert.visible).toBe(false);

    })
  })
})