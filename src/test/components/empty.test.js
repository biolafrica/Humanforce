import Empty from "../../components/empty";
import { render, screen } from "@testing-library/react";

describe("test suite: empty components", ()=>{
  test("test case: renders without crashing", ()=>{
    render(<Empty/>)
    expect(screen.getByText('No available data')).toBeInTheDocument();
  })

  test("test case: renders empty icon", ()=>{
    render(<Empty/>)
    const iconEl = screen.getByAltText("empty icon");

    expect(iconEl).toBeInTheDocument();
    expect(iconEl).toHaveAttribute("src", "/icons/Hourglass empty.svg");

  })

})