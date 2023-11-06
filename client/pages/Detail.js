import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

export default function Detail() {
  const route = useRoute();

  //   useEffect(() => {
  //     // fetch anime id 1
  //   }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>ini detail bossss {route.params.id}</Text>
    </View>
  );
}
