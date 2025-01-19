import { useState } from "react";
import { Image } from "react-native";

export function BetControl () {
    const [bet, setBet] = useState(50)

    const add = () => {
        setBet(bet+10)
    }
    const substract = () => {
        if(bet > 0){
            setBet(bet-10)
        }
        else{
            setBet(0)
        }
    }
    return(
        <button className="control_button bet flex">
            <div className="buttons minus" onClick={substract}>
            <Image style={{width:20}} source={require('../../assets/images/-.png')}  />
            </div>
            <p style={{color:'#FFEB75'}} className="bet-details">
                <p className="head">Total Bet</p>
                <p>{bet +" "}GC</p>
            </p>
            <div className="buttons plus" onClick={add}>
            <Image style={{width:30}} source={require('../../assets/images/plusyellow.png')}  />
            </div>
        </button>
    )
}