import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Login = (props) => {
  let Navigate = useNavigate();
  const [credentials, setcredentails] = useState({ email: "", password: "" });
  const submitform = async (e) => {
    e.preventDefault();
    // API call
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // save the auth token in the localstorage & redirect the home page
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Login Successfully", "success");
      Navigate("/notes");
    } else {
      props.showAlert("Invalid Credentials! Please try again.", "danger");
    }
  };
  // onchange functio
  const handlechange = (e) => {
    e.preventDefault();
    setcredentails({ ...credentials, [e.target.name]: e.target.value });
  };
  // Logic to hide and show password
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };


  // Background image
  const backgroundImgUrl = 'https://wallpaperbat.com/img/329452-night-mountains-summer-illustration-wallpaper-hd-artist-4k.jpg';
  const containerStyle = {
    backgroundImage: `url(${backgroundImgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    maxWidth: '100vw'
  };
  return (
    <>
      <div style={containerStyle} className="container">
        <span className="py-3 d-flex justify-content-center text-center text-white">
          Welcome to the YNotebook - Your Notes save on the Cloud.
        </span>
        <h1 className="my-3 mx-3 text-center text-white">Login to your account</h1>
        <div className="container d-flex justify-content-center">
          <form
            onSubmit={submitform}
            className="border border-primary rounded px-3 signup-form"
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label text-white">
                Email address
              </label>
              <i className="fa fa-user-circle mx-2" aria-hidden="true"></i>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                value={credentials.email}
                onChange={handlechange}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-dark">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white">
                Password
              </label>
              <i className="fa fa-unlock-alt mx-2 px-6" aria-hidden="true"></i>
              <input
                type={showPassword ? "text": "password"}
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                value={credentials.password}
                onChange={handlechange}
              />
              {showPassword?<i onClick={handlePasswordToggle} className="fa-solid eye-icon fa-eye-slash"></i>:<i onClick={handlePasswordToggle} className="fa-solid eye-icon fa-eye"></i>}
            </div>
            <div className="container"> 
              <button
                type="submit"
                className="btn loginbtn btn-primary"
              >
                Login
              </button>
              <div className="signup text-white">
                Don't have an account?
                <NavLink className="btn btn-primary d-flex justify-content-center" to="/signup">
                  Sign up
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
