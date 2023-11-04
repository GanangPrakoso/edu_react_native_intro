import { View, Text, Image } from "react-native";
import styles from "../assets/styles";

export default function Card({ item }) {
  return (
    <>
      <View
        style={{
          width: styles.screenSize.width / 2.5,
          alignItems: "center",
          marginRight: 16,
        }}
      >
        <Image
          source={{
            uri: item.images.jpg.image_url,
          }}
          style={{
            width: styles.screenSize.width / 2.5,
            height: styles.screenSize.height / 4,
            resizeMode: "cover",
            borderRadius: 14,
          }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 8,
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
      </View>
    </>
  );
}
