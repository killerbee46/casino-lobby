import { Icon, Tabs } from "@ant-design/react-native";
import { GameTabContent } from "./GameTabContent";
import { FavouriteGames } from "./FavouriteGames";
import { Image } from "react-native";
import { colors } from "@/utils/colors";
import { useState } from "react";

export function GameTab () {
    const [active, setActive] = useState(0)

    const changeTab = (e:number) => {
        setActive(e)
    }
    return(
        <div>
            <div className="flex" style={{background:colors.navBg, borderRadius:8}}>
                <div onClick={()=>setActive(0)} className="flex  justify-center" style={{width:'55%', borderBottom:active === 0 ? '2px solid #E9DFEF' : ""}}>
                    <Image style={{width:20, height:20}} source={require('../../assets/images/all-games-icon.png')} />
                    <p style={{color:'#E9DFEF'}}>See All Games</p>
                </div>
                <div onClick={()=>setActive(1)} className="flex justify-center" style={{width:'45%', borderBottom:active === 1 ? '2px solid #E9DFEF' : ""}}>
                    <Image style={{width:20, height:20}} source={require('../../assets/images/heart.png')} />
                    <p style={{color:'#E9DFEF'}}>Favourites</p>
                </div>
            </div>
            {
                active === 0 ?
                <GameTabContent /> :
                <FavouriteGames />
            }
        </div>
    )
}