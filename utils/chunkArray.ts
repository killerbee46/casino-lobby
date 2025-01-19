import { GameDataType } from "./gameData";

export function chunkArray (arr:GameDataType[], size:number) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, size + i));
    }
    return res;
   }