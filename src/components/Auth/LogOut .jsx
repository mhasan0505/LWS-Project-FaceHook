import { useNavigate } from "react-router-dom";
import Logout from "../../assets/icons/logout.svg";
export default function LogOut () {
    const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout logic here
    // After logout, navigate to the login page
     navigate("/login");
  };

  return (
    <button className="icon-btn" onClick={handleLogout}>
        <img src={Logout} alt="Logout" />
    </button>
  )
}
