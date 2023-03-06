import React from "react";
import "./intro.css";


const Intro = () => {
  return (
    <div className="home">
      <p className="game">
        <h1 className="gamer">Red gamer space</h1>

        <h4 className="intro1">
          Red gamer space is a web site created for dedicated{" "}
        </h4>
        <h4 className="intro2">
          gamers so they can communicate with each other:
        </h4>
        <h4 className="intro3">You can add posts to:</h4>
        <h4 className="intro4">Submit your opinion on a game.</h4>
        <h4 className="intro5">Ask for other people's opinion about </h4>
        <h4 className="intro6">a game you want to download.</h4>
        <h4 className="intro7">or you can find posts of all new games.</h4>
      </p>
    </div>
  );
};

export default Intro;
