import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../pages/Detail";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ gestureDirection: "vertical" }}
      />
    </Stack.Navigator>
  );
}
