import StaffDetails from "../../../components/userPage/staffDetails";
import { render, screen } from "@testing-library/react";

describe('test suite: staff details components', ()=>{
  test("test case: render staff details", ()=>{
    const staff = {
      firstname : 'Abiodun',
      lastname : 'Biobaku',
      position : "Engineer"
    }
    render(<StaffDetails staff={staff}/>)
    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();

  })
   
  test("test case: render empty staff details", ()=>{
    const staff = {};
    render(<StaffDetails staff={staff}/>)
    expect(screen.getByText("Eatup Food Services")).toBeInTheDocument();

  })

})