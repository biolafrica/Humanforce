import { useState, useEffect } from "react";

const Timer =({
  initialHours = 0,
  initialMinute = 0,
  initialSeconds = 0,
  isRunning,
  isPaused,
  })=>{
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(()=>{
    let timer;

    if(isRunning && !isPaused){
      timer = setInterval(()=>{
        setSeconds((prevSeconds)=>{
          if(prevSeconds === 59){
            setMinutes((prevMinutes)=>{
              if(prevMinutes === 59){
                setHours((prevHours)=> prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0
          }
          return prevSeconds +1;
        })
      }, 1000);
    }
    return () => clearInterval(timer);
   
  },[isRunning, isPaused]);

  const formatTime = (time) =>time < 10 ? `0${time}` : time;

  return(
    
    <div className="timer_container">
      <h3>
        <b>
          {formatTime(hours)}:
          {formatTime(minutes)}:
          {formatTime(seconds)}
        </b>
      </h3>
    </div>
    
  );


};

export default Timer;


