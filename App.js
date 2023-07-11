import {
  Platform,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./image/fentezi.jpg")}
      >
        <View style={styles.innerBox}>
          <Text style={styles.text}>TEST PROJECT!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "pink",
    padding: 20,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
