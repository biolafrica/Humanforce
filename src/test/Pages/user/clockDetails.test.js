import ClockDetails from "../../../pages/user/clockDetails";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import React from "react";
import UseFetch from "../../../hooks/userFetch";
import { AlertPopup, useAlert } from "../../../components/alert";
import { type } from "@testing-library/user-event/dist/type";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios")
jest.mock("../../../hooks/userFetch");
jest.mock("../../../components/alert")

describe("test suite: Clock details componenets button click", ()=>{
  const mockNavigate = jest.fn();
  const mockShowAlert = jest.fn();

  beforeEach(()=>{

    jest.clearAllMocks();
    jest.spyOn(global, "localStorage", "get").mockReturnValue({
      getItem: (key) =>(key === "authToken" ? "mockToken" : JSON.stringify({name: 'John Doe'}))
    });

    useAlert.mockReturnValue({
      alert: {visible: false, message: "", type: ""},
      showAlert: mockShowAlert,
    })
  })

  test("test case: clicking 'start break' calls patchAttendance with break_start ", async ()=>{
    UseFetch.mockReturnValue({
      data : {attendance: {
        clock_in : "2025-02-04T08:00:00.000+00:00",
        break_start : null,
        break_end : null,
        clock_out : null
      }},
      isLoading: false,
      erroMessage : null
    });

    axios.patch.mockResolvedValue({})

    render(<MemoryRouter><ClockDetails /></MemoryRouter>)
    const button = screen.getByRole("button", {name : /start break/i});

    await act(async ()=>{
      fireEvent.click(button)
    })

    await waitFor(()=> expect(axios.patch).toHaveBeenCalledWith(
      'http://localhost:4000/clock/mockId',
      {break_start: expect.any(Date)},
      expect.any(Object)
    ));


  })
})