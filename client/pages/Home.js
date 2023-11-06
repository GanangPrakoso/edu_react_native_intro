import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground, FlatList, Button } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://api.jikan.moe/v4/anime");

      setData(data.data);
    } catch (error) {
      console.log(error, "<<<<");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ImageBackground
        style={{ flex: 1, objectFit: "cover" }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZYSmGWhAUYRAoZC3pCHy8XDLaG1qd4ZI3g&usqp=CAU",
        }}
      />
      <View style={{ flex: 2, backgroundColor: "#10002b", padding: 18 }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 14,
          }}
        >
          Anime List
        </Text>
        {/* <Button
          title="ke detail walaupun button ini ga make sense"
          onPress={() => navigation.navigate("Detail")}
        /> */}
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item, index }) => <Card key={index} item={item} />}
            horizontal={true}
          />
        )}
      </View>
      <StatusBar color="#0c1821" />
    </>
  );
}
