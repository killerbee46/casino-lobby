import { GameCard } from "@/components/GameCard/GameCard";
import { chunkArray } from "@/utils/chunkArray";
import { getAllGames } from "@/utils/favouriteController";
import { GameDataType } from "@/utils/gameData";
import { useEffect, useState } from "react";
import Slick from "react-native-slick";

export function GameSlider ({random}:any) {
    const [games, setGames] = useState<any>([])
        const getFavGames = async () => await getAllGames()
    
        useEffect(() => {
            getFavGames().then((res) => {
                const chunked = chunkArray(res, 3)
                const reversed = chunked.reverse()
                if (random) {
                    setGames(reversed)
                } else {
                    setGames(chunked)
                }
            })
        }, [])
    return(
        <Slick loop style={{height:120}} showsPagination={false}>
        {games?.map((chunk:GameDataType[])=> (
            <div className="flex" style={{justifyContent:'flex-end', gap:'3%'}}>
              {  chunk?.map((fg: GameDataType, i: number) => (
                <div key={i} style={{ width: '30%' }}>
                    <GameCard {...fg} />
                </div>
            ))}
            </div>
        ))}
      </Slick>
    )
}