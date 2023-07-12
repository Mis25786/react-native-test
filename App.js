import {
  Platform,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./image/fentezi.jpg")}
      >
        <TextInput style={styles.input} />
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
    color: "#ffffff",
    fontSize: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 6,
    marginHorizontal: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
