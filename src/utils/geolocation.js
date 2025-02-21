import axios from "axios";

const getCordinates = async(address)=>{
  if(!address) return null

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if(response.data.status === "OK"){
      const location = response.data.results[0].geometry.location;
      return {lat:location.lat, lng: location.lng};
    }
    
  } catch (error) {
    console.error("Geocoding Error:", error);
  }

  return null;
}

const getDistance =(lat1, lng1, lat2, lng2)=>{
  const toRad = (x) => (x * Math.PI) /180;
  const R = 6371000;
  const dLat = toRad(lat2 -lat1);
  const dLng = toRad(lng2 - lng1);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const handleGeoLocationError = (error, showAlert)=>{
  switch (error.code) {
    case error.PERMISSION_DENIED:
      showAlert("Location access denied. Please enable location services.", "error")
      break;
    case error.POSITION_UNAVAILABLE:
      showAlert("Location access denied. Please enable location services.", "error")
      break;
    case error.TIMEOUT:
      showAlert("Location request timed out. Please try again.", "error")
      break;
    default:
      showAlert("An unknown location error occurred.", "error")
  }

}

const  handleApiError = (error, navigate, showAlert)=>{

  if(error.response){
    if (error.response.status === 500){
      navigate("/server-error")
    }else{
      console.error("API Error:", error.response.data);
      showAlert(error.response.data.message || "An error occurred.", "error");
    }

  }else{
    console.error("API Request Error:", error.message);
    showAlert("Network error. Please try again later.", "error")
  }

}

export {
  getCordinates,
  getDistance,
  handleGeoLocationError,
  handleApiError
}