import { render, screen } from "@testing-library/react";
import Loading from "../../components/loading";
import Lottie from "lottie-react";

jest.mock("lottie-react", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="lottie-animation"></div>),
}));

describe("test suite: loading components", ()=>{
  
  test("test case: render properly", ()=>{
    render(<Loading/>)
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  })

  test("test case : applies default width and height", ()=>{
    render(<Loading/>)
    expect(Lottie).toHaveBeenCalledWith(
      expect.objectContaining({
        style: { width: 150, height: 150, color: "#000000" },
      }),
      {}
    );

  })

  test("test case : applies custom width and height", ()=>{
    render(<Loading width={200} height={200} className="custom-class"/>)
    expect(screen.getByTestId("loading")).toHaveClass("custom-class");
    expect(Lottie).toHaveBeenCalledWith(
      expect.objectContaining({
        style: { width: 200, height: 200, color: "#000000" },
      }),
      {}
    );

  })

})