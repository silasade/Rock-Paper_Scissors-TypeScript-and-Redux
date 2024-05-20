import { useSelector } from "react-redux";
function Score(){
    const score = useSelector((state: { scoreReducer: { score: number } }) => state.scoreReducer.score);

    return(
        <div className="Header">
            <div>
                <h1 style={{color:"white"}}>ROCK PAPER SCISSORS</h1>
            </div>
            <div>
                <div className="score">
                    <h5 style={{color:'hsl(229, 64%, 46%)'}}>SCORE</h5>
                    <h1>{score}</h1>
                </div>
            </div>
        </div>
    )
}
export default Score