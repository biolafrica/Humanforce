import performance from "../../utils/performance";



describe("test suite : for performance", ()=>{

  test("basic data test cases : excellent", ()=>{
    const attendanceData = [
      {status : "early", name : "abiodun"},
      {status : "early", name : "adenekan"},
      {status : "early", name : "taiwo"},
      {status : "early", name : "luke"}
    ];

    expect(performance(attendanceData)).toBe("Excellent")
  });

  test("basic data test cases : Good", ()=>{
    const attendanceData = [
      {status : "early", name : "abiodun"},
      {status : "early", name : "adenekan"},
      {status : "early", name : "taiwo"},
      {status : "late", name : "luke"}
    ];

    expect(performance(attendanceData)).toBe("Good")
  });

  test("edge data test cases : empty", ()=>{
    const attendanceData = [];
    expect(performance(attendanceData)).toBe("Get started")
  });

  test("edge data test cases : Bad", ()=>{
    const attendanceData = [
      {status : "late", name : "abiodun"},
      {status : "late", name : "adenekan"},
      {status : "late", name : "taiwo"},
      {status : "late", name : "luke"}
    ];

    expect(performance(attendanceData)).toBe("Bad")
  });

})