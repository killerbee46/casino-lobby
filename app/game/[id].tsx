import { HeaderCarousel } from "@/components/Carousel/HeaderCarousel/HeaderCarousel";
import { Container } from "@/components/Container/Container";
import Navbar from "@/components/Navbar/Navbar";
import { ScrollView, View } from "react-native";
import '../../assets/styles/index.css'
import { GameTab } from "@/components/GameTab/GameTab";
import { useLocalSearchParams } from "expo-router";
import { gameData } from "@/utils/gameData";
import { GameScreen } from "@/components/GameScreen/GameScreen";

export default function GameDetail() {
  const params = useLocalSearchParams();
  
  const data = gameData?.find((f)=> f.id === params?.id)
  return (
    <div>
      <Navbar title={data?.title} />
      <ScrollView style={{overflowY:'scroll'}}>
        <GameScreen />
      </ScrollView>
    </div>
  );
}
