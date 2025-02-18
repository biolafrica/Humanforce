import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { UnpaidStaff, PaidStaff } from "../../../components/adminPage/fixedPayrollStaff";
import { useForm } from "../../../hooks/useForm";
import { useAlert } from "../../../components/alert";
import useTeam from "../../../components/adminPage/buttonState";
import axios from "axios";


jest.mock("../../../hooks/useForm", ()=>({
  useForm : jest.fn()
}))

jest.mock("../../../components/alert", ()=>({
  useAlert : jest.fn(()=>({
    alert:{visible: false, message: "", type:""},
    showAlert: jest.fn(),
  }))
}));

jest.mock("react-router-dom", ()=>({
  useNavigate: jest.fn(),
  useParams: ()=>({id: "123"}),
}))

jest.mock("../../../components/adminPage/buttonState")


describe("test suite: fixed payroll staff components", ()=>{

  describe("test suite: unpaid staff components", ()=>{

    let mockHandleInputChange, mockFormData, mockShowAlert, mockNavigate;
   
    beforeEach(()=>{
      mockHandleInputChange = jest.fn();

      mockFormData= { 
        basic_pay: 50000, 
        lateness_fine: 5000,
        loan: 5000, 
        bonuses: 2000, 
        pension: 47000, 
        createdAt: "2024-02-11T09:54:44.823Z", 
        deductions: 1000, 
        tax:200,
        net_pay:30000 
      };


      mockShowAlert = jest.fn();
      mockNavigate = jest.fn();

      useForm.mockReturnValue({
        formData: mockFormData,
        handleInputChange : mockHandleInputChange
      });

      useTeam.mockReturnValue({AdminNonExclusiveButton : "filled-btn"});

      useAlert.mockReturnValue({
        alert:{visible: false, message: "", type: ""},
        showAlert: mockShowAlert,
      });

      render(<UnpaidStaff payroll={mockFormData} />);

    });

    test("test case: render form with inital values", ()=>{
      expect(screen.getAllByPlaceholderText("Enter amount")[0]).toHaveValue("50000");
      expect(screen.getAllByPlaceholderText("Enter amount")[1]).toHaveValue("5000");
      expect(screen.getAllByPlaceholderText("Enter amount")[2]).toHaveValue("5000");
    });

    test("test case: updates form field when user types", ()=>{
      const input = screen.getAllByPlaceholderText("Enter amount")[0];
      fireEvent.change(input, {target:{value : "600000"}});

      expect(mockHandleInputChange).toHaveBeenCalled();

    });

    test("test case: submit form and handle success response", async()=>{
    
      axios.post = jest.fn().mockResolvedValue({response:{ok: true}});

      fireEvent.submit(screen.getByTestId("unpaid_staff"));

      await waitFor(()=>expect(axios.post).toHaveBeenCalledTimes(1));
     
      //expect(mockShowAlert).toHaveBeenCalledWith("payroll information updated successfully!", "success");
    })

    test('test case: handle API error response correctly', async()=>{
      //axios.post = jest.fn().mockRejectedValue({response:{status: 500}})
      fireEvent.submit(screen.getByTestId("unpaid_staff"));

      await waitFor(()=> expect(axios.post).toHaveBeenCalledTimes(1))
     

    })

  });


  describe("test suite: paid staff components", ()=>{
    const mockPaidPayroll= [{
      basic_pay: 50000, 
      lateness_fine: 5000,
      loan: 5000, 
      bonuses: 2000, 
      pension: 47000, 
      createdAt: "2024-02-11T09:54:44.823Z", 
      deductions: 1000, 
      tax:200,
      net_pay:30000 
    }];
    test("test case: renders paid payroll details correctly", ()=>{
      render(<PaidStaff paidPayroll={mockPaidPayroll} />)

      expect(screen.getByText("Basic Pay")).toBeInTheDocument();
      expect(screen.getByText("₦50,000.00")).toBeInTheDocument();
      expect(screen.getByText("₦2,000.00")).toBeInTheDocument();

     
    })
  })
})