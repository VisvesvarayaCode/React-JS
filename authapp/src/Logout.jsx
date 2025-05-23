import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Logout() {
  const navigate = useNavigate();


  useEffect(() => {
    // Clear the authentication token
    localStorage.removeItem("userToken");


    // Optional: show a message before redirect
    setTimeout(() => {
      navigate("/login");
    }, 1000); // 1-second delay
  }, [navigate]);


  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>You have been logged out.</h2>
      <p>Redirecting to login page...</p>
    </div>
  );
}


export default Logout;
