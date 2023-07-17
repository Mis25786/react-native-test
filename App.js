import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
//* import * as Font from "expo-font";
//* import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

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
  const routing = useRoute(true);

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
