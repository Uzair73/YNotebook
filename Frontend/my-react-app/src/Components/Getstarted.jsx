import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const Getstarted = () => {
  return (
    <>
      <div className="conatiner">
        <div className="container">
          <svg
            id="wave"
            style={{ transform: "rotate(180deg)", transition: "0.3s" }}
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop
                  stopColor="rgba(64.416, 223.445, 172.269, 1)"
                  offset="0%"
                ></stop>
                <stop
                  stopColor="rgba(101.945, 107.329, 62.451, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,49L48,106.2C96,163,192,278,288,285.8C384,294,480,196,576,187.8C672,180,768,261,864,318.5C960,376,1056,408,1152,408.3C1248,408,1344,376,1440,326.7C1536,278,1632,212,1728,155.2C1824,98,1920,49,2016,40.8C2112,33,2208,65,2304,98C2400,131,2496,163,2592,204.2C2688,245,2784,294,2880,285.8C2976,278,3072,212,3168,187.8C3264,163,3360,180,3456,196C3552,212,3648,229,3744,245C3840,261,3936,278,4032,261.3C4128,245,4224,196,4320,204.2C4416,212,4512,278,4608,261.3C4704,245,4800,147,4896,163.3C4992,180,5088,310,5184,367.5C5280,425,5376,408,5472,351.2C5568,294,5664,196,5760,204.2C5856,212,5952,327,6048,318.5C6144,310,6240,180,6336,163.3C6432,147,6528,245,6624,245C6720,245,6816,147,6864,98L6912,49L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"
            ></path>
          </svg>
          <img src="/Images/img.jpg" className="img-fluid get-img-res" alt="" />
        </div>
        <div className="content float-end">
          <h4>
            <span className="color">Welcome to YNotebook,</span> where
            innovation meets organization. Our digital notebook is designed to
            enhance your note-taking experience, providing a seamless blend of
            versatility and functionality.
          </h4>
          <NavLink
            className="btn justify-content-center btn-primary my-2"
            to="/signup"
            role="button"
          >
            Get Started
          </NavLink>
        </div>
        <div className="inline-flex row mx-3 my-3">
          <h1 className="text-center">Why YNotebook?</h1>
          <div className="col-md-3 wd">
            <div className="card my-4">
              <div className="card-body bg-color">
                <i className="fa-solid ft d-flex justify-content-center fa-pen-nib"></i>
                <h3>Smart Organization</h3>
                <p className="lead card-title">
                  YNotebook intelligently categorizes your notes, making it easy
                  to find what you need when you need it. Say goodbye to the
                  chaos of scattered thoughts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 wd">
            <div className="card my-4">
              <div className="card-body bg-color">
                <i className="fa-solid ft d-flex justify-content-center fa-desktop"></i>
                <h3>Intuitive Interface</h3>
                <p className="lead card-title">
                  Experience note-taking like never before with our
                  user-friendly interface. Effortlessly create, edit, and
                  organize your notes with just a few clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 wd">
            <div className="card my-4">
              <div className="card-body bg-color">
                <i className="fa-solid ft d-flex justify-content-center fa-globe"></i>
                <h3>Seamless Synchronization</h3>
                <p className="lead card-title">
                  Access your notes anytime, anywhere. YNotebook synchronizes
                  effortlessly across devices, ensuring your ideas are always at
                  your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 wd">
            <div className="card my-4">
              <div className="card-body bg-color">
                <i className="fa-solid ft d-flex justify-content-center fa-file-shield"></i>
                <h3>Secure and Private</h3>
                <p className="lead card-title">
                  Your thoughts are personal. Whether you prefer typing or do
                  something, YNotebook prioritizes your privacy, ensuring your
                  data is safe and sound.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 wd">
            <div className="card my-4">
              <div className="card-body bg-color">
                <i className="fa-solid ft d-flex justify-content-center fa-people-group"></i>
                <h3>Collaborate with Ease</h3>
                <p className="lead card-title">
                  Enhance teamwork with collaborative features. Share ideas,
                  make edits in real-time, and transform brainstorming into
                  action.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 wd">
            <div className="card my-4">
              <div className="card-body bg-color">
                <i className="fa-solid ft d-flex justify-content-center fa-pencil"></i>
                <h3>Ready to Elevate Your Note-Taking</h3>
                <p className="lead card-title">
                  Join YNotebook today and experience note-taking in its purest
                  form.Enjoy journey where your ideas take center stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Getstarted;
