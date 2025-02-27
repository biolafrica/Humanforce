import {useState } from "react"
let timer;


const AlertPopup =({message, type = 'success', visible,})=>{

  if (!visible) return null

  console.log(type);

  return(
    <div className={`alert_cont alert-${type}`}>

      <div className="message_cont">
        <img src={`/icons/${type}.svg`} alt="" />
        <h6>{message}</h6>
      </div>
      
    </div>
  )


}

const useAlert = ()=>{

  clearTimeout(timer)
  const [alert, setAlert] = useState({
    visible : false,
    message : "",
    type: "success"
  })


  const showAlert=(message, type = "success")=>{
    setAlert({visible: true, message, type});
  }

  timer = setTimeout(()=>{
    setAlert({visible: false, message: "", type: "success"})
  }, 2000);

  return{alert, showAlert}

}

export {AlertPopup, useAlert } 
