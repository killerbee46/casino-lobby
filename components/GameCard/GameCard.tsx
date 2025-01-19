import { removeFromFavourite, setFavourite } from '@/utils/favouriteController'
import './GameCard.css'
import { GameDataType } from "@/utils/gameData"
import { useState } from 'react'
import { Image } from "react-native"

export function GameCard (data:GameDataType) {
    const [isFavourite, setIsFavourite] = useState(data?.isFavorite)
    const addToFavourite = (e:any) => {
        e.preventDefault()
        if(!isFavourite){
            setIsFavourite(true)
           setFavourite(data?.id)
        }
        else{
            setIsFavourite(false)
            removeFromFavourite(data?.id)
        }
    }
    return(
        <a href={`/game/${data?.id}`}>
            <div className="game_card" style={{
            backgroundImage:`url(${data?.image})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
        }}>
            <div className="favourite_icon" onClick={addToFavourite}>
                {
                    !isFavourite ? 
                    <Image style={{width:'100%',height:'100%' }} source={require('../../assets/images/heart.png')} />
                    :
                    <Image style={{width:'100%',height:'100%' }} source={require('../../assets/images/heart-red.png')} />
                }
            </div>
        </div>
        </a>
    )
}