import Lottie from "lottie-react";
import loadingAnimation from "../../utils/Animation - 1737464803244.json"

const Loading = ({width = 150, height=150,color = "#000000", className = ""})=>{
  return (
    <div data-testid="loading" className={`loading_container ${className}` }>
      <Lottie animationData={loadingAnimation} loop={true} style={{width, height, color}} />
    </div>
  )

}

export default Loading;