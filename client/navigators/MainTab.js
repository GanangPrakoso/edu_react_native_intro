import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../pages/About";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import MainStack from "./MainStack";

export default function MainTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 color={color} size={size} name="info-circle" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
