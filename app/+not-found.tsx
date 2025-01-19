import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>404</Text>
      <Text>Page Not Found</Text>
      <a href="/">Back Home</a>
    </View>
  );
}
