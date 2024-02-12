import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-4">About the YNoteBook</h1>
        <p className="lead">
          YNoteBook is more than just a note-taking web application. It's your
          digital brain, a powerful and intuitive platform for capturing,
          organizing, and accessing your thoughts, ideas, and information with
          unparalleled clarity.<br></br>
          <br></br>
          Students who want to remember more, learn faster, and ace their exams.
          Professionals who need to organize their thoughts, manage projects,
          and stay on top of their tasks. Creatives who want to capture their
          inspiration, explore ideas, and bring their visions to life. Anyone
          who wants to unleash the power of their mind and achieve more with
          less effort.
        </p>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fill-opacity="1"
              d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,208C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
