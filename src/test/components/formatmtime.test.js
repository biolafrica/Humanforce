import {
  formatMTime, 
  timeDifference, 
  breakTimeDifference,
  formattedDate, 
  generateYearMonthWeeks,
  formattedFullTime 
} from "../../components/formatmtime";

describe("test Suite : Time and date function format", ()=>{

  test("basic test case: extract hours and minute from ISO time", ()=>{
    const time = '2024-12-31T11:14:19.393+00:00';
    expect(formatMTime(time)).toBe("11 : 14");
  });

  test("edge test case: extract hours and minute from 0 ISO time", ()=>{
    const time = '1970-01-01T00:00:00.000+00:00';
    expect(formatMTime(time)).toBe("01 : 00");
  });

  test("edge test case: extract hours and minute from 0 ISO time for leap year date", ()=>{
    const time = '2024-02-29T23:45:00.000Z';
    expect(formatMTime(time)).toBe("23 : 45");
  });

  test("edge test case: extract hours and minute from 0 ISO time for invalid date", ()=>{
    const time = '2024-12-31S11:14:19.393+00:00'
    const nullTime = ""
    expect(formatMTime(time)).toStrictEqual("NaN : NaN");
    expect(formatMTime(nullTime)).toStrictEqual("NaN : NaN");
  });




  test("basic test case: extract hours,minute and seconds from ISO time for UTC", ()=>{
    const time = '2024-12-31T11:14:19.393+00:00'
    expect(formattedFullTime(time)).toBe("11 : 14 : 19");
  });

  test("edge test case: extract hours,minute and seconds from 0 ISO time for UTC", ()=>{
    const time = '1970-01-01T00:00:00.000+00:00'
    expect(formattedFullTime(time)).toBe("00 : 00 : 00");
  });

  test("edge test case: extract hours,minute and seconds from 0 ISO time for UTC leap year", ()=>{
    const time = '2024-02-29T23:45:00.000Z';
    expect(formattedFullTime(time)).toBe("23 : 45 : 00");
  });




  test("basic test case: check time difference between clock-in and clock out time", ()=>{
    const startTime = "2025-02-04T02:44:51.490+00:00";
    const endTime = "2025-02-04T11:10:29.364+00:00";
    expect(timeDifference(startTime, endTime)).toStrictEqual({"hours":8, "minutes":25, "seconds": 37})
  });

  test("basic test case: check same time difference between clock-in and clock out time", ()=>{
    const startTime = "2025-02-04T02:44:51.490+00:00";
    const endTime = "2025-02-04T02:44:51.490+00:00";
    expect(timeDifference(startTime, endTime)).toStrictEqual({"hours":0, "minutes":0, "seconds": 0})
  });

  test("edge test case: check midnight time difference between clock-in and clock out time", ()=>{
    const startTime = "2025-02-04T00:00:00.000+00:00";
    const endTime = "2025-02-04T02:44:51.490+00:00";
    expect(timeDifference(startTime, endTime)).toStrictEqual({"hours":2, "minutes":44, "seconds": 51})
  });

  test("edge test case: check 1 seconds time difference between clock-in and clock out time", ()=>{
    const startTime = "2025-02-04T02:44:50.490+00:00";
    const endTime = "2025-02-04T02:44:51.490+00:00";
    expect(timeDifference(startTime, endTime)).toStrictEqual({"hours":0, "minutes":0, "seconds": 1})
  });

  test("edge test case: check negative time difference between clock-in and clock out time", ()=>{
    const startTime = "2025-02-04T11:10:29.364+00:00";
    const endTime = "2025-02-04T02:44:51.490+00:00";
    expect(timeDifference(startTime, endTime)).toStrictEqual({"hours":-9, "minutes":-26, "seconds": -38})
  });

 


  test("basic test case: check time difference between clock-in, clock-out and break time", ()=>{
    const startTime = "2025-02-04T02:44:51.490+00:00";
    const endTime = "2025-02-04T11:10:29.364+00:00";
    const startBreak = "2025-02-04T03:59:21.465+00:00";
    const endBreak = "2025-02-04T04:22:50.380+00:00";
    expect(breakTimeDifference(startTime, endTime, startBreak,endBreak)).toStrictEqual({"hours":8, "minutes":2, "seconds": 9})
  });

  test("edge test case: check time difference between clock-in, clock-out and break time with no break time", ()=>{
    const startTime = "2025-02-04T02:44:51.490+00:00";
    const endTime = "2025-02-04T11:10:29.364+00:00";
    const startBreak = "";
    const endBreak = "";
    expect(breakTimeDifference(startTime, endTime, startBreak,endBreak)).toStrictEqual({"hours":NaN, "minutes":NaN, "seconds": NaN})
  });

  test("basic test case: check time difference between clock-in, clock-out and break time with only start break time", ()=>{
    const startTime = "2025-02-04T02:44:51.490+00:00";
    const endTime = "2025-02-04T11:10:29.364+00:00";
    const startBreak = "2025-02-04T03:59:21.465+00:00";
    const endBreak = "";
    expect(breakTimeDifference(startTime, endTime, startBreak,endBreak)).toStrictEqual({"hours":NaN, "minutes":NaN, "seconds": NaN})
  });



  test("basic test case: extract day,month and year from ISO time format", ()=>{
    const time = '2025-02-04T02:44:51.490+00:00'
    expect(formattedDate(time)).toBe("04 - 02 - 2025");
  });

  test("edge test case: extract day,month and year from inavlid ISO time format", ()=>{
    const time = '2025-02-04Y02:44:51.490+00:00'
    expect(formattedDate(time)).toBe("NaN - NaN - NaN");
  });



  test("basic test case: extract currentYear, currentMonth and current Week from ISO time format", ()=>{
    expect(generateYearMonthWeeks()).toStrictEqual({"currentMonth": "February", "currentYear": "2025", "week": "2025-W6"});
  });


})