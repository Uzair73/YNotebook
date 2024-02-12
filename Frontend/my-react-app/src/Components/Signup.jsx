import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";



const Signup = (props) => {
  let Navigate = useNavigate();
  const [credentials, setcredentails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const submitform = async (e) => {
    const { name, email, password } = credentials;
    e.preventDefault();
    // API call
    const response = await fetch(`https://y-notebook-api.vercel.app/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      // save the auth token in the localstorage & redirect the home page
      localStorage.getItem("token", json.authtoken);
      props.showAlert("Account Created", "success");
      Navigate("/notes");
    } else {
      props.showAlert("Incorrect deatils", "danger");
    }
  };
  // onchange function
  const handlechange = (e) => {
    e.preventDefault();
    setcredentails({ ...credentials, [e.target.name]: e.target.value });
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
      <div style={containerStyle} className="container signup-container">
        <h4 className="py-4 text-center text-white">Create Your account to the Ynotebook</h4>
        <div className="container d-flex justify-content-center">
          <form
            onSubmit={submitform}
            className="border border-primary signup-form rounded px-3"
          >
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white">
                Enter Your Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control text-white tras"
                id="name"
                value={credentials.name}
                onChange={handlechange}
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label text-white">
                Enter Your Email
              </label>
              <input
                type="email"
                className="form-control tras"
                name="email"
                id="email"
                value={credentials.email}
                onChange={handlechange}
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <div id="emailHelp" className="form-text text-dark">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white">
                Enter Your Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control tras"
                id="exampleInputPassword1"
                value={credentials.password}
                onChange={handlechange}
                minLength={5}
                required
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn loginbtn btn-primary"
            >
              Create Account
            </button>
            <div className="signup mb-2 text-white">
                Already have an account?
                <NavLink className="btn btn-primary d-flex justify-content-center" to="/login">
                  Login
                </NavLink>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
