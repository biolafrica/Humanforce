import StaffForm from "../../../components/adminPage/staffForm";
import { render, screen, fireEvent, waitFor,} from "@testing-library/react";
import axios from "axios";
import { useAlert } from "../../../components/alert";
import useTeam from "../../../components/adminPage/buttonState";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("axios");

jest.mock("../../../components/alert",()=>({
  useAlert :jest.fn()
}))

jest.mock("../../../components/adminPage/buttonState");


describe("test suite: staff form components ", ()=>{
  const mockInitialValues ={
    _id: 1,
    firstname: "Abiodun", 
    lastname: "Biobaku",
    status: "Active",
    role: "Operations",
    employment_type: "Contract",
    salary: 50000,
    date_of_birth: '2024-12-07',
    email_address: "test@gmail.com",
    phone_number: 81851919680,
    address: "ajasin, osun",
    next_of_kin_name: "john Doe",
    next_of_kin_phone_number: 81851919680,
  };

  const mockShowAlert = jest.fn()

  beforeEach(()=>{
    useAlert.mockReturnValue({
      alert:{visible: false, message:"", type: ""},
      showAlert : mockShowAlert
    });

    useTeam.mockReturnValue({
      AdminExclusiveButton : "filled-btn"

    })
  })

  test("test case: display initial value properly", ()=>{
    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />)

    expect(screen.getByPlaceholderText("Enter first name")).toHaveValue("Abiodun");
    expect(screen.getByPlaceholderText("Enter last name")).toHaveValue("Biobaku");

  })

  test("test case: handle input change correctly", ()=>{
    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />)

    fireEvent.change(screen.getByPlaceholderText("Enter first name"),{target: {value : "John"}})
    fireEvent.change(screen.getByPlaceholderText("Enter last name"),{target: {value : "Doe"}})

    expect(screen.getByPlaceholderText("Enter first name")).toHaveValue("John");
    expect(screen.getByPlaceholderText("Enter last name")).toHaveValue("Doe");


  })

  test("test case: submit form successfully", async()=>{
    axios.post.mockResolvedValueOnce({
      ok: true
    })

    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />)

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
    })

  });

  test("test case: handle similar email error", async()=>{

    axios.post.mockRejectedValueOnce({
      response:{status : 402}
    })

    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />);

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockShowAlert).toHaveBeenCalledWith("Email already exist", "error");
    })

  })

  test("test case: handle server error", async()=>{

    axios.post.mockRejectedValueOnce({
      response:{status : 500}
    })

    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />);

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/server-error");
    })
    
  })

  test("test case: handle server error", async()=>{

    axios.post.mockRejectedValueOnce({
      response:{status : 400}
    })

    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />);

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockShowAlert).toHaveBeenCalledWith("Unsuccessfull, please try again", "error");
    })
    
  })

  test("test case: handles date of birth error", ()=>{
    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />);

    fireEvent.change(screen.getByPlaceholderText("select date of birth"), {target: {value : "2200-01-01"}});
    fireEvent.submit(screen.getByRole("form"))

    expect(screen.getByText("Date of birth cannot be today or in the future")).toBeInTheDocument();

  })

  test("test case: handles phone number error", ()=>{
    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />);

    fireEvent.change(screen.getByPlaceholderText("Enter Phone number"), {target: {value : "7455267167"}});
    fireEvent.submit(screen.getByRole("form"))

    expect(screen.getByText("Minimum of eleven digits required")).toBeInTheDocument()

  })

  test("test case: handles next of kin phone number error", ()=>{
    render(<StaffForm initialValues={mockInitialValues} url="https://example.com/api/team" />);

    fireEvent.change(screen.getByPlaceholderText("Enter phone number"), {target: {value : "7455267167"}});
    fireEvent.submit(screen.getByRole("form"))

    expect(screen.getByText("Minimum of eleven digits required")).toBeInTheDocument()

  })


})