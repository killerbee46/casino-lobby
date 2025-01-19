import { GameSlider } from "../Carousel/GameSlider/GameSlider";
import { Image } from "react-native";
import { PopularGameSlider } from "../Carousel/GameSlider/PopularGameSlider";

export function GameTabContent () {
    return <div style={{ margin: '20px auto' }}>
            <div className="flex text-white" style={{ fontWeight: 600 }}><Image style={{ width: 20, height: 20 }} source={require('../../assets/images/like.png')} /> For you</div>
            <div style={{ margin: '20px auto' }}>
                <GameSlider /> 
            </div>
            <div className="flex text-white" style={{ fontWeight: 600 }}><Image style={{ width: 30, height: 20 }} source={require('../../assets/images/flag.png')} /> TOP GAMES IN YOUR HOME STATE</div>
            <div style={{ margin: '20px auto' }}>
                <PopularGameSlider />
            </div>
            <div className="flex text-white" style={{ fontWeight: 600 }}><Image style={{ width: 20, height: 20 }} source={require('../../assets/images/play-green.png')} /> PLAY AGAIN</div>
            <div style={{ margin: '20px auto' }}>
                <GameSlider random /> 
            </div>
    </div>
}