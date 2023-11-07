import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTab from "./MainTab";
import Sandbox from "../pages/Sandbox";

export default function MainDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Sandbox"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={MainTab} />
      <Drawer.Screen name="Sandbox" component={Sandbox} />
    </Drawer.Navigator>
  );
}
