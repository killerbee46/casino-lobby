import { Image } from "react-native";

export function StartButton () {
    return(
        <button className="control_button start">
            <Image style={{width:'100%'}} source={require('../../assets/images/start-text.png')}  />
        </button>
    )
}