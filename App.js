import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
//* import * as Font from "expo-font";
//* import { AppLoading } from "expo";

import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";

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
    <>
      {/* <LoginScreen /> */}
      <RegisterScreen />
    </>
  );
}
