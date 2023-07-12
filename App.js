import {
  Platform,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function App() {
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
          <Button title="SIGN IN" />
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
});
