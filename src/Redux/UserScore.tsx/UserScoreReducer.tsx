import { score } from "./UserScoreType";

const initialState = {
    score: 0,
};

type scoreType = {
    type: string;
    payload: { win: boolean };
};

export function ScoreReducer(state = initialState, action: scoreType) {
    switch (action.type) {
        case score:
            return {
                ...state,
                score: action.payload.win ? state.score + 1 : state.score,
            };
        default:
            return state;
    }
}
