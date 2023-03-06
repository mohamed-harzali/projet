import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; 
import { logout } from "../../redux/actions/authActions";

const NavBar = () => {
  const auth = useSelector((state) => state.authReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector (state => state.authReducer.user)
  useEffect(() => {
    if (auth.isAuth === false) {
      navigate("/");
    }
  }, [auth.isAuth]
  );



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/218/431/non_2x/q-initial-letter-monogram-esport-and-gaming-logo-template-free-vector.jpg"
            width="200"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link" aria-current="page" href="#!">
                  Home
                </span>
              </Link>
            </li>

            {auth.isAuth ? (
              <>
                <li className="nav-item">
                  <Link to="/Profile">
                    <span className="nav-link " href="#!">
                      Add Posts
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/AllPost">
                    <span className="nav-link" href="#!">
                      Posts
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">
                    <span
                      className="nav-link"
                      href="#!"
                      onClick={() => dispatch(logout())}
                    >
                      Logout
                    </span>
                  </Link>
                </li>
                {auth.isAuth ? (
                  <li className="nav-item">
                    <span className="user">{userName && userName.name}</span>
                  </li>
                ) : null}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <span className="nav-link" href="#!">
                      Login
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <span className="nav-link" href="#!">
                      Register
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
