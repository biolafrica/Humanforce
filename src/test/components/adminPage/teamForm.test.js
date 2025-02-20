import TeamForm from "../../../components/adminPage/teamForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { useAlert } from "../../../components/alert";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("axios");

jest.mock("../../../components/alert",()=>({
  useAlert :jest.fn()
}))

describe("test suite: Team form components", ()=>{
  const mockInitialValues ={staff_id: "", team_role: ""};

  const mockUser = [
    {_id: 1, firstname: "Abiodun", lastname: "Biobaku"},
    {_id: 2, firstname: "Lateef", lastname: "John"}
  ]

  const mockShowAlert = jest.fn()

  beforeEach(()=>{
    useAlert.mockReturnValue({
      alert:{visible: false, message:"", type: ""},
      showAlert : mockShowAlert
    });

  })

  test("test case: display initial value properly", ()=>{
    render(<TeamForm url="https://example.com/api/team" initialValues={mockInitialValues} users={mockUser} edit={false}/>);

    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument();
    expect(screen.getByText("Lateef John")).toBeInTheDocument();
    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();

  });

  test("test case: input change working perfectly", ()=>{
    render(<TeamForm url="https://example.com/api/team" initialValues={mockInitialValues} users={mockUser} edit={false}/>);

    const nameInput = screen.getAllByRole("combobox")[0];
    const roleInput = screen.getAllByRole("combobox")[1];

    fireEvent.change(nameInput, {target:{value : "1"}});
    fireEvent.change(roleInput, {target:{value : "Finance"}});
  
    expect(nameInput).toHaveValue("1");
    expect(roleInput).toHaveValue("Finance");
  })

  test("test case: input maitain correct state for team edit component", ()=>{
    const mockInitialValues ={staff_id: 1, team_role: "Basic"};
    const mockUser = [
      {_id: "1", firstname: "Abiodun", lastname: "Biobaku"}
    ]
    render(<TeamForm url="https://example.com/api/team" initialValues={mockInitialValues} users={mockUser} edit={true}/>);

    const nameInput = screen.getAllByRole("combobox")[0];
    const roleInput = screen.getAllByRole("combobox")[1];
  
    expect(nameInput).toHaveAttribute("disabled", "");
    expect(roleInput).toHaveValue("Basic");
    

  })

  test("test case: to submit form successfully", async()=>{

    axios.post.mockResolvedValueOnce({
      ok: true
    })

    render(<TeamForm url="https://example.com/api/team" initialValues={mockInitialValues} users={mockUser} edit={false}/>);

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/admin/team");

    })



    
  })

  test("test case: to handle sever error properly", async()=>{

    axios.post.mockRejectedValueOnce({
      response:{status : 500}
    })

    render(<TeamForm url="https://example.com/api/team" initialValues={mockInitialValues} users={mockUser} edit={false}/>);

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/server-error");

    })
  })

  test("test case: to handle 402 error properly", async()=>{

    axios.post.mockRejectedValueOnce({
      response:{status : 402}
    })

    render(<TeamForm url="https://example.com/api/team" initialValues={mockInitialValues} users={mockUser} edit={false}/>);

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockShowAlert).toHaveBeenCalledWith("Team member already exist", "error");
    })
  })

  test("test case: to handle other error properly", async()=>{

    axios.post.mockRejectedValueOnce({
      response:{status : 400}
    })

    render(<TeamForm url="https://example.com/api/team" initialValues={mockInitialValues} users={mockUser} edit={false}/>);

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(()=>{
      expect(axios.post).toHaveBeenCalled();
      expect(mockShowAlert).toHaveBeenCalledWith("Unsuccessfull, please try again", "error");
    })
  })
})