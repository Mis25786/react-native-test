import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
//* import * as Font from "expo-font";
//* import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="Create" component={CreateScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

//* const loadApplication = async () => {
//*   await Font.loadAsync({
//*     "DMMono-Regular": require("./assets/Fonts/DMMono-Regular.ttf"),
//*   });
//* };

export default function App() {
  //* const [iasReady, setIasReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "DMMono-Regular": require("./assets/Fonts/DMMono-Regular.ttf"),
    "DMMono-Medium": require("./assets/Fonts/DMMono-Medium.ttf"),
    "DMMono-Light": require("./assets/Fonts/DMMono-Light.ttf"),
  });
  const routing = useRoute(null);

  //* if (!iasReady) {
  //*   return (
  //*     <AppLoading
  //*       startAsync={loadApplication}
  //*       onFinish={() => setIasReady(true)}
  //*       onError={console.warn}
  //*     />
  //*   );
  //* }
  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
