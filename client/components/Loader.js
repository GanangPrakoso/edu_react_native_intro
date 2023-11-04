import LottieView from "lottie-react-native";
import { View } from "react-native";

export default function Loader() {
  return (
    <View style={{ alignItems: "center" }}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/loading.json")}
      />
    </View>
  );
}
