import TeamDetails from "../../../components/adminPage/teamDetails";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAlert } from "../../../components/alert";
import useTeam from "../../../components/adminPage/buttonState";
import { useNavigate } from "react-router-dom";

jest.mock("../../../components/alert", ()=>( {useAlert :jest.fn()}))
jest.mock("../../../components/adminPage/buttonState", ()=>jest.fn())
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("test suite: team details components", ()=>{
    
  const mockTeams=[
    {_id: 12, staff_id: 1, team_role: "Admin"},
    {_id: 13, staff_id: 2, team_role: "Basic"}
  ];

  const mockUsers=[
    {firstname: "Abiodun", lastname: "Biobaku", email_address: "test@gmail.com", staff_code:"EU123456", _id: 1},
    {firstname: "Jamiu", lastname: "Folaji", email_address: "test@yahoo.com", staff_code:"EU123654", _id: 2},
    {firstname: "Oletubo", lastname: "David", email_address: "test@eatup.com", staff_code:"EU987654", _id: 3}
  ];

  const mockShowAlert = jest.fn()
  const mockNavigate = jest.fn()
  const mockHandleDelete = jest.fn()
 

  beforeEach(()=>{
    useAlert.mockReturnValue({
      alert:{visible: false, message:"", type: ""},
      showAlert : mockShowAlert
    });

    useTeam.mockReturnValue({
      team: { role: 'Admin' },
    })

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: ()=> Promise.resolve({message : 'Team deleted successfully'})
      })
    )

  })


  test("test case: render team members details correctly", ()=>{
    render(
      <MemoryRouter>
        <TeamDetails users={mockUsers} teams={mockTeams}/>
      </MemoryRouter>
    )

    expect(screen.getByText("Abiodun Biobaku")).toBeInTheDocument()
    expect(screen.getByText("test@gmail.com")).toBeInTheDocument()
    expect(screen.getByText("EU123456")).toBeInTheDocument()

  })

  test('test case: display empty state when no team member exist', ()=>{
    render(
      <MemoryRouter>
        <TeamDetails users={[]} teams={[]}/>
      </MemoryRouter>
    )

    expect(screen.getByText("No available data")).toBeInTheDocument();

  })

  test("test case: allow admin to edit a team member", ()=>{
    render(
      <MemoryRouter>
        <TeamDetails users={mockUsers} teams={mockTeams}/>
      </MemoryRouter>
    )

    const editLink = screen.getAllByAltText("edit icon")[0].closest("a");
    expect(editLink).toHaveAttribute("href", "/admin/team/12")

  })

  test("test case: prevent  non-admin to edit a team member", ()=>{
    useTeam.mockReturnValue({
      team: { role: 'Basic' },
    })
    
    render(
      <MemoryRouter>
        <TeamDetails users={mockUsers} teams={mockTeams}/>
      </MemoryRouter>
    )

    const editIcon = screen.getAllByAltText("edit icon")[0];
    fireEvent.click(editIcon)
    expect(mockShowAlert).toHaveBeenCalledWith('Only Admin can add team', 'info')

  })

  test("test case: allow admin to delete a team member", async()=>{
    render(
      <MemoryRouter>
        <TeamDetails users={mockUsers} teams={mockTeams}/>
      </MemoryRouter>
    )

    const deleteIcon = screen.getAllByAltText("Delete-icon")[0];
    fireEvent.click(deleteIcon);
    await mockHandleDelete();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/admin/team-delete/12`,
      expect.objectContaining({
        method: "DELETE",
        headers : expect.objectContaining({
          Authorization: expect.stringContaining('Bearer null'),
        }),

      }) 
    );
    await Promise.resolve();
    expect(mockShowAlert).toHaveBeenCalledWith('Team deleted successfully', 'success');

  })


  test("test case: prevent  non-admin from deleting a team member", ()=>{
    useTeam.mockReturnValue({
      team: { role: 'Basic' },
    })
    
    render(
      <MemoryRouter>
        <TeamDetails users={mockUsers} teams={mockTeams}/>
      </MemoryRouter>
    )

    const deleteIcon = screen.getAllByAltText("Delete-icon")[0];
    fireEvent.click(deleteIcon)
    expect(mockShowAlert).toHaveBeenCalledWith('Only Admin can delete team', 'info')

  });

  test("test case: handle server error correctly", async()=>{
    global.fetch.mockImplementationOnce(()=>
      Promise.resolve({
        ok:false,
        status:500,
        json: ()=> Promise.resolve({})
      })
    )

    render(
      <MemoryRouter>
        <TeamDetails users={mockUsers} teams={mockTeams}/>
      </MemoryRouter>
    );

    const deleteIcon = screen.getAllByAltText("Delete-icon")[0];
    fireEvent.click(deleteIcon);
    await mockHandleDelete();
    
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })

})