import React, { useState, useEffect } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";

const Register = () => {
  const [infoReg, setInfoReg] = useState({
    name: "",
    email: "",
    Password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInfoReg({ ...infoReg, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(infoReg));
  };

  const auth = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuth === true) {
      navigate("/Profile");
    }
  }, [navigate, auth.isAuth]);

  return (
    <section className="vh-100" style={{ backgroundColor: "black" }}>
      <div className="box">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card1 text-black" style={{ borderRadius: "25px" }}>
              <div className="card1-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="sign1">Sign up :</p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>

                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="name"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>

                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="Password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Repeat your Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="Password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-light btn-lg"
                          onClick={handleRegister}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/433/858/original/golden-wings-logo-on-black-background-vector.jpg"
        className="img999"
        alt="Sample "
      />
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/433/858/original/golden-wings-logo-on-black-background-vector.jpg"
        className="img991"
        alt="Sample "
      />
    </section>
  );
};

export default Register;
