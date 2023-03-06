import React, { useEffect } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";

function MyComponent() {
  return (
    <div>
      <body>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100"
          rel="stylesheet"
        />
        <p id="head1" class="header">
          Hello :)
        </p>
        <p id="head2" class="header">
          This is our red gamer space !
        </p>
        <p id="head3" class="header">
          Here you can meet friends and <br></br> ask them whatever you want .
        </p>
        <p id="head4" class="header">
          so what are you waiting for ?
        </p>
        <p id="head5" class="header">
          Sign up and be one of us ;)
        </p>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </body>
      <Link to="/introduction">
        <button 
          type="button"
          className="btn-n1"
          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        >
          <p className="findmore"> more informations ?</p>
        </button>
      </Link>
    </div>
  );
}

export default MyComponent;
