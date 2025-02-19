import { useForm } from "../../hooks/useForm";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("test suite: useform hook", ()=>{

  test("test case: display given values properly", ()=>{
    const {result} = renderHook(()=> useForm({name: "", email: ""}));
    expect(result.current.formData).toEqual({name: "", email: ""});
  });

  test('test case: update formdata when handleInput function is called', ()=>{
    const {result} = renderHook(()=>useForm({name: "", email: ""}));

    act(()=>{
      result.current.handleInputChange({target: {name: "name", value: "abiodun"}})
    })

    expect(result.current.formData).toEqual({name: "abiodun", email: ""})

    act(()=>{
      result.current.handleInputChange({target: {name: "email", value: "test@gmail.com"}})
    })

    expect(result.current.formData).toEqual({name: "abiodun", email: "test@gmail.com"})
  });

  test("test case: reset form to initial value when resetForm is called", ()=>{
    const {result} = renderHook(()=> useForm({name: "", email: ""}))

    act(()=>{
      result.current.handleInputChange({target: {name:"name", value: "lateef"}})
    })

    expect(result.current.formData).toEqual({name: "lateef", email: ""});

    act(()=>{
      result.current.resetForm()
    });

    expect(result.current.formData).toEqual({name: "", email: ""});
  })

  test("test case: create a new key and value if absent", ()=>{
    const {result} = renderHook(()=> useForm({name: "",}))

    act(()=>{
      result.current.handleInputChange({target: {name:"email", value: "test@gmail.com"}})
    })

    expect(result.current.formData).toEqual({name: "", email: "test@gmail.com"});

   
  })

})