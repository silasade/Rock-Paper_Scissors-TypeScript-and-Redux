import { GameReducer } from "./UserPlay/GameReducer";
import { combineReducers } from "redux";
import { SystemReducer } from "./SystemPlay/SystemReducer";
import { ScoreReducer } from "./UserScore.tsx/UserScoreReducer";
export const rootReducers=combineReducers({
    gamePlay: GameReducer,
    SystemPlay: SystemReducer,
    scoreReducer: ScoreReducer
})