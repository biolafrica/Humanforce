import formatNaira from "../../utils/formatNaira";

describe("test suite : formatNaira function", ()=>{
  it("basic test case: format a positive number", ()=>{
    expect(formatNaira(2000)).toBe("₦2,000.00");
  });

  it("edge test case: format 0", ()=>{
    expect(formatNaira(0)).toBe("₦0.00");
  });

  it("edge test case: format a negative number", ()=>{
    expect(formatNaira(-200)).toBe("-₦200.00");
  });

  it("edge test case: format a non Number", ()=>{
    expect(formatNaira("age")).toBe("Invalid Amount");
  });

  it("edge test case: format a decimal number", ()=>{
    expect(formatNaira(20.888)).toBe("₦20.89");
  });
  
})