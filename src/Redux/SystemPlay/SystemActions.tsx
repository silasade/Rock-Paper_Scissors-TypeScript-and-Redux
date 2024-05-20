export type SystemActionType={
    payload:{id:number},
    type:string
}
export function play_random(randomid:number):SystemActionType{
    return{
        type: "PLAY_RANDOM",
        payload: {
        id: randomid,
    }
}
}
