import React, { useEffect, useState } from 'react'
import './login.css'
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/actions/authActions'



const Login = () => {

  const [info , setInfo] = useState({
    email : "" ,
    Password : ""
  })

  const dispatch = useDispatch()
  const auth = useSelector(state=>state.authReducer)

  const navigate = useNavigate()

  
  useEffect(()=>{
    if (auth.isAuth === true) {
      navigate('/Profile')
    }
  },[navigate,auth.isAuth])
  
  
  const handleChange = (e) => {
    setInfo({...info,[e.target.name]:e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(info))
  }

  


  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://images.hdqwalls.com/download/mad-joker-4k-0o-1920x1080.jpg"
                className="img6"
                alt="Sample "
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="sin">Sign in with :</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address :
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password :
                  </label>
                  <input 
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder="Enter password"
                    name="Password"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register">
                      {" "}
                      <span className="link-warning">Register</span>{" "}
                      <p className='no9ta'>.</p>
                    </Link>{" "}
                  </p>
                  <button
                    type="button"
                    className="btn btn-light btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleLogin}
                  >
                    {" "}
                    {auth && auth.isLoading ? "Loading" : "Login"}{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="img4">
          <img
            src="https://wallpaperaccess.com/full/1560264.jpg"
            width="200"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </div>
      </section>
    </div>
  );
}

export default Login