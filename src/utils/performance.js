const performance =(attendanceData)=>{

  const earlyNo = (attendanceData.filter((data)=> data.status === "early")).length;
  const totalNo = attendanceData.length;
  const percentagePerformance = Math.floor((earlyNo / totalNo) * 100);

  if(percentagePerformance <= 40){
    return "Bad"
  }else if(percentagePerformance >= 41 && percentagePerformance <= 60){
    return "Fair"
  }else if(percentagePerformance >= 61 && percentagePerformance <=90){
    return "Good"
  }else if(percentagePerformance >= 91 && percentagePerformance <= 100){
    return "Excellent"
  }else if(percentagePerformance === 0){
    return "Get started"
  }

}

export default performance;