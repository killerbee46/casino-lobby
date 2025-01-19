import { useState } from "react";
import { Image } from "react-native";

export function Controls () {
    const [mute, setMute] = useState(true)
    const switchMute = () => {
        setMute(!mute)
    }
    return(
        <button className="control_button controls flex justify-between">
            <div className="buttons">
            <Image style={{width:20, height:20}} source={require('../../assets/images/setting.png')}  />
            </div>
            <div className="buttons">
            <Image style={{width:20, height:20}} source={require('../../assets/images/info.png')}  />
            </div>
            <div className="buttons" onClick={switchMute}>
            {
                mute ?
                <Image style={{width:20, height:20}} source={require('../../assets/images/mute.png')}  /> 
                :
                <Image style={{width:20, height:20}} source={require('../../assets/images/sound-on.png')}  />
            }
            </div>
        </button>
    )
}