import PayslipTemplate from "../../../components/userPage/payslipTemplate";
import formatNaira from "../../../utils/formatNaira";
import { render, screen } from "@testing-library/react";


describe("test suite: payslip Template components", ()=>{

  describe("test suite: contract staff payslip Template components", ()=>{
    const mockPayslipData = {
      basic_pay: 50000,
      bonuses: 5000,
      loan: 10000,
      tax: 500,
      pension: 2000,
      lateness_fine: 1000,
      createdAt: '2024-02-10T00:00:00Z',
      week: "W2-2025",
      days: {
        monday: { rate: 5200 },
        tuesday: { rate: 5100 },
        wednesday: { rate: 5300 },
        thursday: { rate: 5400 },
        friday: { rate: 5500 },
        saturday: { rate: 5600 },
      },

    }

    const mockStaff ={
      firstname: 'John',
      lastname: 'Doe',
      role: "Cloud Engineer",
      staff_code: "EU123456",
      employment_type: 'contract'
    };

    beforeEach(()=>{
      render(<PayslipTemplate payslipData={mockPayslipData} staff={mockStaff}/>)

    })

    test("test case: render staff details correctly", ()=>{
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Cloud Engineer")).toBeInTheDocument();
      expect(screen.getByText("EU123456")).toBeInTheDocument();
      expect(screen.getByText('Eatup Ng')).toBeInTheDocument();
    })

    test('display correct payment amount', ()=>{
      expect(screen.getByText("₦50,000.00")).toBeInTheDocument()
      expect(screen.getByText("₦5,000.00")).toBeInTheDocument()

    });

    test("show correct week information", ()=>{
      expect(screen.getByText("W2-2025")).toBeInTheDocument();
      expect(screen.getByText(formatNaira(5200))).toBeInTheDocument();
    })

  });

  describe("test suite: fixed staff payslip Template components", ()=>{

    const mockPayslipData = {
      basic_pay: 60000,
      bonuses: 6000,
      loan: 20000,
      tax: 6000,
      pension: 3000,
      lateness_fine: 2000,
      createdAt: '2025-02-15T00:00:00Z',

    }

    const mockStaff ={
      firstname: 'Abiodun',
      lastname: 'Biobaku',
      role: "Software Engineer",
      staff_code: "EU143476",
      employment_type: 'fixed'
    };

    beforeEach(()=>{
      render(<PayslipTemplate payslipData={mockPayslipData} staff={mockStaff}/>)
    })

    test("test case: render staff details correctly", ()=>{
      expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
      expect(screen.getByText("Software Engineer")).toBeInTheDocument();
      expect(screen.getByText("EU143476")).toBeInTheDocument();
      expect(screen.getByText("Eatup Ng")).toBeInTheDocument();
    });

    test("test case: calculate and display net pay correctly", ()=>{
      const netPay = (60000 + 6000) -(20000 + 6000 + 3000 +2000)
      expect(screen.getByText(formatNaira(netPay))).toBeInTheDocument();

    })

    test("test case: show personalized thank you message", ()=>{
      expect(screen.getByText('Thank you for your hardwork Abiodun!')).toBeInTheDocument();
      
    })
  });
})