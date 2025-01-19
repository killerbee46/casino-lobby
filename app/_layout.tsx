import Navbar from "@/components/Navbar/Navbar";
import { colors } from "@/utils/colors";
import { Slot, Stack } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return <SafeAreaView >
    <Slot />
  </SafeAreaView>
}
