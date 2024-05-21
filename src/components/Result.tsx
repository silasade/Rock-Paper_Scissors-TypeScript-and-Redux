import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { play_random } from "../Redux/SystemPlay/SystemActions";
import { ROCK, PAPER, SCISSORS } from "../Redux/UserPlay/GameType";
import { UserScoreAction } from "../Redux/UserScore.tsx/UserScoreAction"; // Adjust import path as needed

const Result = () => {
    const navigate = useNavigate();
    const [statement, setStatement] = useState("");
    const dispatch = useDispatch();
    const userSelect = useSelector((state: { gamePlay: { type: string; image: string } }) => state.gamePlay);
    const getRandom = useSelector((state: { SystemPlay: { id: number | undefined; type: string; image: string } }) => state.SystemPlay);

    useEffect(() => {
        const randomNumber: number = Math.floor(Math.random() * 3) + 1;
        dispatch(play_random(randomNumber));
        const result=handleScore(randomNumber)
        setStatement(result ? "You Win" : "You Lose");

        dispatch(UserScoreAction(result));
        // localStorage.setItem("score", JSON.stringify(score));
    }, []);

    function handleScore(number: number): boolean {
            const randomeType=getTypeById(number)
        if (getRandom.type === userSelect.type) return false; // assuming a tie is considered a loss for simplicity

        if (
            (randomeType === ROCK && userSelect.type === PAPER) ||
            (randomeType === PAPER && userSelect.type === SCISSORS) ||
            (randomeType === SCISSORS && userSelect.type === ROCK)
        ) {
            return true;
        }

        return false;
    }
    const style={
        borderColor: userSelect.type==="ROCK"? "hsl(349, 71%, 52%)":userSelect.type==="PAPER"?"hsl(230, 89%, 62%)":"hsl(39, 89%, 49%)"
    }
    const style1={
        borderColor: getRandom.type==="ROCK"? "hsl(349, 71%, 52%)":getRandom.type==="PAPER"?"hsl(230, 89%, 62%)":"hsl(39, 89%, 49%)"
    }
    function getTypeById(id: number): string {
        switch (id) {
            case 1:
                return ROCK;
            case 2:
                return PAPER;
            case 3:
                return SCISSORS;
            default:
                return "";
        }
    }
    return (
        <div className="result">
            <div className="one">
                <div>
                    <h3 style={{color:"white"}}>YOU PICKED</h3>
                </div>
                <div className="image" style={style}>
                    {userSelect.image}
                </div>
            </div>
            <div>
                <h3 className="statement" style={{color:"white"}}>{statement}</h3>
                <button className="playAgain" onClick={() => navigate('/')}>Play Again</button>
            </div>
            <div className="two">
                <div>
                    <h3 style={{color:"white"}}>THE COMPUTER PICKED</h3>
                </div>
                <div className="image" style={style1}>
                    {getRandom.image}
                </div>
            </div>
        </div>
    );
};

export default Result;
