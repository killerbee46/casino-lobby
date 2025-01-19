import { Image } from "react-native";
import { GameCard } from "../GameCard/GameCard";
import { getAllFavouriteGames } from "@/utils/favouriteController";
import { useEffect, useState } from "react";
import { Icon } from "@ant-design/react-native";
import { GameDataType } from "@/utils/gameData";
import { chunkArray } from "@/utils/chunkArray";

export function FavouriteGames() {
    const [favs, setFavs] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const getFavGames = async () => await getAllFavouriteGames()

    useEffect(() => {
        setLoading(true)
        getFavGames().then((res) => {
            setLoading(false)
            const chunked = chunkArray(res, 3)
            setFavs(chunked)
        })
    }, [])

    return <div style={{ margin: '20px auto' }}>
        <div className="flex text-white" style={{ fontWeight: 600, marginBottom:20 }}><Image style={{ width: 20, height: 20 }} source={require('../../assets/images/heart-red.png')} /> FAVOURITES</div>
        <div style={{ margin: '20px auto', width:'100%' }}>
            {
                loading ?
                    <p className="text-white text-center" style={{ height: 200 }}> Loading <Icon name="loading" /></p> :
                    favs && favs?.length === 0 ?
                        <div className="flex justify-center text-white text-center" style={{ height: 200 }}>
                            No Game Added to Favourite
                        </div> :
                        favs?.map((fg: GameDataType[], i: number) => (
                            <div style={{marginBottom:30}} className="flex justify-around">
                                {fg?.map((f:GameDataType)=>(
                                <div key={i} style={{ width: '30%' }}>
                                <GameCard {...f} />
                            </div>
                            ))}
                            </div>
                        ))
            }
        </div>
    </div>
}