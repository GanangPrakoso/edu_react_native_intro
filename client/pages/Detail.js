import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

export default function Detail() {
  const route = useRoute();

  useEffect(() => {
    console.log("fetch anime id " + route.params.id);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>ini detail tauk {route.params.id}</Text>
    </View>
  );
}
