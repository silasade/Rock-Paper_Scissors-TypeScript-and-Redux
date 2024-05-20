import { score } from "./UserScoreType";
export function UserScoreAction(wins:boolean |undefined){
    return{
        type: score,
        payload:{
            win: wins
        }
    }
}