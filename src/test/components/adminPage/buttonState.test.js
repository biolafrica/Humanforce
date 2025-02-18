import useTeam from "../../../components/adminPage/buttonState";
import { renderHook } from "@testing-library/react";

describe("test suite: useTeam hook", ()=>{
  afterEach(()=>{
    localStorage.clear();
  })

  test("test case: return default state when no team data is in local storage", ()=>{
    const {result} = renderHook(()=> useTeam());

    expect(result.current.team).toEqual({});
    expect(result.current.AdminExclusiveButton).toEqual("inactive-btn");
    expect(result.current.AdminNonExclusiveButton).toEqual("inactive-btn");

  });

  test("test case: return correct values when user is an admin", ()=>{
    localStorage.setItem("team", JSON.stringify({role : 'Admin'}))
    const {result} = renderHook(()=> useTeam());
    
    expect(result.current.team).toEqual({role : 'Admin'});
    expect(result.current.AdminExclusiveButton).toEqual("filled-btn");
    expect(result.current.AdminNonExclusiveButton).toEqual("filled-btn");
  });

  test("test case:return correct values when user is a Basic", ()=>{
    localStorage.setItem("team", JSON.stringify({role : 'Basic'}));

    const {result} = renderHook(()=> useTeam())

    expect(result.current.team).toEqual({role : 'Basic'})
    expect(result.current.AdminExclusiveButton).toEqual("inactive-btn");
    expect(result.current.AdminNonExclusiveButton).toEqual("inactive-btn");

  });

  test("test case:return correct values when user is a Finance", ()=>{
    localStorage.setItem("team", JSON.stringify({role : 'Finance'}));

    const {result} = renderHook(()=> useTeam())

    expect(result.current.team).toEqual({role : 'Finance'})
    expect(result.current.AdminExclusiveButton).toEqual("inactive-btn");
    expect(result.current.AdminNonExclusiveButton).toEqual("filled-btn");

  })


  test("test case:return correct values when user is a Operations", ()=>{
    localStorage.setItem("team", JSON.stringify({role : 'Operations'}));

    const {result} = renderHook(()=> useTeam())

    expect(result.current.team).toEqual({role : 'Operations'})
    expect(result.current.AdminExclusiveButton).toEqual("inactive-btn");
    expect(result.current.AdminNonExclusiveButton).toEqual("filled-btn");

  })
})