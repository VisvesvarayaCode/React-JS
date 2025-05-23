import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();


  const handleLogout = () => {
    navigate("/logout");
  };


  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>This is a protected page only for logged-in users.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


export default Dashboard;
