import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTab from "./navigators/MainTab";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}
