import {
  Platform,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./image/fentezi.jpg")}
      >
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
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
    color: "#ffffff",
    fontSize: 30,
  },
  image: {
    flex: 1,
    // justifyContent: "flex-end",
    justifyContent: "center",
    resizeMode: "cover",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 6,
    color: "#FFFFFF",
    textAlign: "center",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#FFFFFF",
    marginBottom: 10,
    fontSize: 12,
  },
  btn: {
    backgroundColor: Platform.OS === "ios" ? "transparent" : "#1E90FF",
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Platform.OS === "ios" ? "#FFFFFF" : "transparent",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#1E90FF " : "#FFFFFF",
    fontSize: 12,
  },
});
