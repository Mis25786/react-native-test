import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
//* import * as Font from "expo-font";
//* import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";

const AuthStack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
