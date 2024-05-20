import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import paper from "./images/icon-paper.svg";
import { play_paper, play_rock, play_scissors } from "../Redux/UserPlay/GameActions";

const Game = () => {
  const navigate = useNavigate();
  const { type, image } = useSelector((state: { gamePlay: { type: string; image: string } }) => state.gamePlay);
  const dispatch = useDispatch();

  
  console.log(image)
  const handleRock = () => {
    dispatch(play_rock());
    localStorage.setItem("userClick", JSON.stringify({ type: "rock", image }));
    navigate('/Result');
  };

  const handleScissors = () => {
    dispatch(play_scissors());
    localStorage.setItem("userClick", JSON.stringify({ type: "scissors", image }));
    navigate('/Result');
  };

  const handlePaper = () => {
    dispatch(play_paper());
    localStorage.setItem("userClick", JSON.stringify({ type: "paper", image }));
    navigate('/Result');
  };

  return (
    <>
      <div className="game">
        <img className="rock" src={rock} alt="rock" onClick={handleRock} />
        <img className="scissors" src={scissors} alt="scissors" onClick={handleScissors} />
        <img className="paper" src={paper} alt="paper" onClick={handlePaper} />
      </div>
      
    </>
  );
};

export default Game;
