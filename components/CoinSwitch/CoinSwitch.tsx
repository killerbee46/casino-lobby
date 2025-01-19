import './CoinSwitch.css'
import { useState } from "react";
import { colors } from "@/utils/colors";
import { Image } from "react-native";

export default function CoinSwitch() {
    const [gCoin, setGCoin] = useState(true)

    const switchCoin = () => {
        setGCoin(!gCoin)
    }
    return (
        <div className={`coinSwitch`} onClick={switchCoin} style={{backgroundColor:colors.bgPrimary}}>
            <button className={`switch_button ${gCoin ? "active" : ""}`}><Image style={{width:20, height:20, objectFit:'cover'}} source={require('../../assets/images/coin1.png')} /> {gCoin && <span className="coin_value">400.43</span>}</button>
            <button className={`switch_button ${!gCoin ? "active" : ""}`}><Image style={{width:20, height:20, objectFit:'cover'}} source={require('../../assets/images/coin.png')} />{!gCoin && <span className="coin_value">1000.12</span>}</button>
        </div>
    )
}