import { GameCard } from "@/components/GameCard/GameCard";
import { chunkArray } from "@/utils/chunkArray";
import { getAllGames } from "@/utils/favouriteController";
import { GameDataType } from "@/utils/gameData";
import { useEffect, useState } from "react";
import Slick from "react-native-slick";
import './PopularGameCard.css'
import * as RNLocalize from "react-native-localize";

export function PopularGameSlider () {
    const [games, setGames] = useState<any>([])
    const wholeRegion = RNLocalize.getTimeZone()?.split('/')
const region = wholeRegion[wholeRegion.length-1]


        const getGames = async () => await getAllGames()
    
        useEffect(() => {
            getGames().then((res) => {
                const sorted = res?.filter((v:GameDataType)=>v.region===region)
                setGames(sorted)
            })
        }, [])
        console.log(games, 'what is this')
    return(
        <Slick loop style={{height:200}} showsPagination={false}>
        {games?.map((chunk:GameDataType,j:number)=> (
                <div key={j} style={{ width: '100%', justifyContent:'center', position:'relative'}} className="flex" >
                    <div className="game_card_prefix_num">{j+1}</div>
                    <div style={{width:'50%'}}><GameCard {...chunk} /></div>
                </div>
        ))}
      </Slick>
    )
}