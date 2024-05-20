type ActionType={
    type: string
}
export function play_rock(): ActionType{
    return{
        type:"ROCK"
    }
}
export function play_scissors():ActionType{
    return{
        type: "SCISSORS"
    }
}
export function play_paper():ActionType{
    return{
        type: "PAPER"
    }
}