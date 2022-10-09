import toskaLogo from "../assets/images/toskalogo_color.svg";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="wrapper">
    <div className="flex split-pair align-center region-tn">
      <img src={toskaLogo} alt="toska" className="logo" />
      <div className="flex gap-2">
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="/messages" className="text-link">
          Messages
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
