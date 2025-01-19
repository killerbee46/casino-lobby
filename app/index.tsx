import { HeaderCarousel } from "@/components/Carousel/HeaderCarousel/HeaderCarousel";
import { Container } from "@/components/Container/Container";
import Navbar from "@/components/Navbar/Navbar";
import { ScrollView, View } from "react-native";
import '../assets/styles/index.css'
import { GameTab } from "@/components/GameTab/GameTab";

export default function Index() {
  return (
    <div>
      <Navbar isDefault isHome />
      <ScrollView>
        <div style={{overflowY:'scroll'}}>
        <HeaderCarousel />
        <Container>
          <GameTab />
        </Container>
        </div>
      </ScrollView>
    </div>
  );
}
