import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTab from "./navigators/MainTab";
import MainDrawer from "./navigators/MainDrawer";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {/* <MainTab /> */}
      <MainDrawer />
    </NavigationContainer>
  );
}
