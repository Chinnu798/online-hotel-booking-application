import { Link } from "react-router-dom";
import './NormalHeader.css'

const NormalHeader = () => {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/user/customer/register"
          className="nav-link active"
          aria-current="page"
        >
          <button className="btn btn-warning btn-lg fw-bold py-2 px-4 border-2 border-dark text-dark  hover:bg-primary hover:text-white transition" role="button">SignUp</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/login" className="nav-link active" aria-current="page">
          <button className="btn btn-warning btn-lg fw-bold py-2 px-4 border-2 border-dark text-dark hover:bg-primary hover:text-white transition" role="button">Login</button>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
