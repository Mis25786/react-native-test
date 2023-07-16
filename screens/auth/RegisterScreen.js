import React, { useState, useEffect } from "react";

import {
  Platform,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Button,
} from "react-native";

const initialState = {
  email: "",
  password: "",
  nickname: "",
};

export default function RegisterScreen({ navigation }) {
  //   console.log("navigation", navigation);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
      console.log("width", width);
    };
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../image/fentezi.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello</Text>
                <Text style={styles.headerTitle}>Sign up to get started </Text>
              </View>

              <View>
                <Text style={styles.inputTitle}>NICKNAME</Text>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.nickname}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, nickname: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
              </View>

              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navBtn}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.navBtnTitleText}>
                  You are already registered?{" "}
                  <Text style={styles.navBtnTitle}>Go to login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    resizeMode: "cover",
    justifyContent: "center",
    // justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 6,
    color: "#FFFFFF",
    textAlign: "center",
  },
  form: {
    // marginHorizontal: 40,
  },
  inputTitle: {
    color: "#FFFFFF",
    marginBottom: 10,
    fontSize: 12,
  },
  btn: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,

    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#FFFFFF",
      },
      android: {
        backgroundColor: "#1E90FF",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#1E90FF " : "#FFFFFF",
    fontSize: 12,
  },
  header: {
    alignItems: "center",
    marginBottom: 100,
  },
  headerTitle: {
    fontFamily: "DMMono-Regular",
    fontSize: 30,
    color: "#FFFFFF",
  },
  navBtn: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  navBtnTitleText: { color: "#00FF00", fontSize: 10 },
  navBtnTitle: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
