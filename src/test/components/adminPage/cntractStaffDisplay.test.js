import ContractStaffDisplay from "../../../components/adminPage/contractStaffDisplay";
import { render,screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import useTeam from "../../../components/adminPage/buttonState";
import { useAlert, } from "../../../components/alert";
import formatNaira from "../../../utils/formatNaira";

jest.mock("../../../components/adminPage/buttonState");
jest.mock("../../../components/alert");

describe("test suite: contract staff components", ()=>{
  const mockPayroll={
    "February 2024":[
      { basic_pay: 50000, lateness_fine: 5000,loan: 5000, bonuses: 2000, pension: 47000, week: "2024-W5" },

      { basic_pay: 60000, lateness_fine: 8000,loan: 5000, bonuses: 3000, pension: 55000, week: "2024-W6" },
    ],

    "January 2024":[
      { basic_pay: 55000, lateness_fine: 6000, loan: 5000, bonuses: 2500, pension: 51500, week: "2024-W4" },
    ]
  }

  beforeEach(()=>{
    useTeam.mockReturnValue({team:{role:"Admin"}});
    useAlert.mockReturnValue({alert:{visible:false}, showAlert:jest.fn()});
    
  })

  test("test case: render contract staff details properly",()=>{
    render(
      <MemoryRouter>
        <ContractStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
    expect(screen.getByText("Basic Pay")).toBeInTheDocument();
    expect(screen.getByText(/net Pay/i)).toBeInTheDocument();

    //show the edit button when the month is in the current month"
    expect(screen.getByAltText("Edit")).toBeInTheDocument();
  


  });

  test("test case:displays current month as the default selected month", ()=>{
    render(
      <MemoryRouter>
        <ContractStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
    const currentMonth = new Date().toLocaleString("default", {
      month: 'long', 
      year: "numeric"
    });
    const selectElement = screen.getByRole("combobox");
    expect(selectElement.value).toBe(currentMonth);

  })

  test("test case: updates displayed data when selected month changes", ()=>{

    render(
      <MemoryRouter>
        <ContractStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
    const selectedEl = screen.getByRole("combobox")
    fireEvent.change(selectedEl, {target:{value : "February 2024"}});

    expect(screen.getByText(formatNaira(50000))).toBeInTheDocument();
    expect(screen.getByText(formatNaira(2000))).toBeInTheDocument();
  })

  test("test case: hides the edit button when the month is not in the current month", ()=>{
    render(
      <MemoryRouter>
        <ContractStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
    const selectedEl = screen.getByRole("combobox")
    fireEvent.change(selectedEl, {target:{value : "February 2024"}})
    expect(screen.queryByAltText("Edit")).not.toBeInTheDocument();
  })

  test("test case:opens the edit button when the admin click edit", ()=>{
    render(
      <MemoryRouter>
        <ContractStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );
  
    const editIcon = screen.getByAltText("Edit");
    fireEvent.click(editIcon);
    expect(screen.queryByTestId("contract-staff")).not.toBeInTheDocument();
    
  });

  test("test case: prevents non-admin users from opening the edit popup  and shows an alert", ()=>{
    const showAlertMock = jest.fn();
    useTeam.mockReturnValue({ team: { role: "Staff" } });
    useAlert.mockReturnValue({ alert: { visible: false }, showAlert: showAlertMock });

    render(
      <MemoryRouter>
        <ContractStaffDisplay payroll={mockPayroll}/>
      </MemoryRouter>
    );

    const editIcon = screen.getByAltText("Edit");
    fireEvent.click(editIcon);
    expect(showAlertMock).toHaveBeenCalledWith("You can't edit amount", "info")

  })

})