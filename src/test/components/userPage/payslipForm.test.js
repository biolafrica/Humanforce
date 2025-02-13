import PayslipForm from "../../../components/userPage/payslipForm";
import { render, screen, fireEvent } from "@testing-library/react";
import { useAlert } from "../../../components/alert";

jest.mock("../../../components/alert");

beforeEach(()=>{
  useAlert.mockReturnValue({
    alert: {visible: false, message: "", type:"success"},
    showAlert: jest.fn(),
  });
});

describe('test suite: payslip form components', ()=>{
  
  describe("test suite:contract staff payslip form components",()=>{

    const mockPayslips = {
      "2025" : { January:[
        {createdAt: "2025-01-11T11:59:24.730+00:00", week: "2025-W1", _id: 1},

        {createdAt: "2025-01-11T11:59:24.730+00:00", week: "2025-W2", _id: 2},

        {createdAt: "2025-01-11T11:59:24.730+00:00", week: "2025-W3", _id: 3}
      ]
    }}

    const mockStaff ={
      employment_type : "contract",
      name: "James"
    }

    test("test case: render form correctly for fixed staff", ()=>{
      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>)

      expect(screen.getByLabelText(/Year:/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/payslip:/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Weeks:/i)).toBeInTheDocument();

    })

    test("test case: display an alert if no month and week", ()=>{
      const showAlertMock =jest.fn();

      useAlert.mockReturnValue({
        alert:{ visible: false, message: "", type: "success"}, 
        showAlert: showAlertMock
      });

      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>);

      fireEvent.submit(screen.getByRole("button", {name: /View Payslip/i}));
      expect(showAlertMock).toHaveBeenCalledWith("Select month", "info");
      

    });

    test("test case: display an alert if no week", ()=>{
      const showAlertMock =jest.fn();

      useAlert.mockReturnValue({
        alert:{ visible: false, message: "", type: "success"}, 
        showAlert: showAlertMock
      });

      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>);

      fireEvent.change(screen.getByLabelText(/Payslip:/i), {target:{value: "January"}});
      fireEvent.submit(screen.getByRole("button", {name: /View Payslip/i}));
      expect(showAlertMock).toHaveBeenCalledWith("Payslip not found for the selected month", "info");
      

    });

    test("submits form and dispalys payslip data if found", ()=>{
      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>);
      fireEvent.change(screen.getByLabelText(/Payslip:/i), {target:{value: "January"}});
      fireEvent.change(screen.getByLabelText(/Weeks:/i), {target:{value: "2025-W2"}});
      fireEvent.submit(screen.getByRole("button", {name: /View Payslip/i}));
      expect(screen.getByTestId("payslip-template")).toBeInTheDocument();

    });

    test('display an alert if payslip is not found', ()=>{
      const showAlertMock =jest.fn();

      useAlert.mockReturnValue({
        alert:{ visible: false, message: "", type: "success"}, 
        showAlert: showAlertMock
      });

      render(<PayslipForm payslips={{}} staff={mockStaff}/>);
      fireEvent.submit(screen.getByRole("button", {name: /View Payslip/i}))
      expect(showAlertMock).toHaveBeenCalled();
      expect(showAlertMock).toHaveBeenCalledWith("Payslip not found for the selected month", "info");

    })

  })

  describe("test suite:fixed staff payslip form components",()=>{
    const mockPayslips = {
      "2025" :[
        {createdAt: "2025-01-11T11:59:24.730+00:00", staff_type: "fixed", _id: 1},
        {createdAt: "2025-02-11T11:59:24.730+00:00", staff_type: "fixed", _id: 2},
      ],
      "2024":[
        {createdAt: "2024-12-11T11:59:24.730+00:00", staff_type: "fixed", _id: 3}
      ]
    }

    const mockStaff ={
      employment_type : "fixed",
      name: "Abiodun"
    }
    
    test("test case: render form correctly for fixed staff", ()=>{
      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>)
  
      expect(screen.getByLabelText(/Year:/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/payslip:/i)).toBeInTheDocument();
      expect(screen.queryByLabelText(/Weeks:/i)).toBeNull();

    })

    test("test case: display an alert if no month is selected", ()=>{
      const showAlertMock =jest.fn();

      useAlert.mockReturnValue({
        alert:{ visible: false, message: "", type: "success"}, 
        showAlert: showAlertMock
      });

      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>);

      fireEvent.submit(screen.getByRole("button", {name: /View Payslip/i}));
      expect(showAlertMock).toHaveBeenCalledWith("Payslip not found for the selected month", "info");
      

    })

    test("changes selected year and updates month accordingly", ()=>{
      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>);
      const yearSelect = screen.getByLabelText(/Year:/i);
      fireEvent.change(yearSelect,{target: {value: "2024"}})
      expect(yearSelect).toHaveValue("2024")
    });

    test("submits form and dispalys payslip data if found", ()=>{
      render(<PayslipForm payslips={mockPayslips} staff={mockStaff}/>);
      fireEvent.change(screen.getByLabelText(/Payslip:/i), {target:{value: "January"}});
      fireEvent.submit(screen.getByRole("button", {name: /View Payslip/i}));
      expect(screen.getByTestId("payslip-template")).toBeInTheDocument();

    })


    test('display an alert if payslip is not found', ()=>{
      const showAlertMock =jest.fn();

      useAlert.mockReturnValue({
        alert:{ visible: false, message: "", type: "success"}, 
        showAlert: showAlertMock
      });

      render(<PayslipForm payslips={{}} staff={mockStaff}/>);
      fireEvent.submit(screen.getByRole("button", {name: /View Payslip/i}))
      expect(showAlertMock).toHaveBeenCalled();
      expect(showAlertMock).toHaveBeenCalledWith("Payslip not found for the selected month", "info");

    })
    

  })

 

 
})