import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Picker,
  TouchableOpacity,
} from "react-native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [shopType, setShopType] = useState("");
  const [language, setLanguage] = useState("English");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Here you would usually validate the inputs and handle the sign-up logic
    alert("Sign Up button pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.label}>username</Text>
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Text style={styles.label}>email</Text>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <View style={styles.lang}>
        <Text style={styles.label}>Language</Text>
        <Picker
          selectedValue={language}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Hindi" value="Hindi" />
          <Picker.Item label="Marathi" value="Marathi" />
          <Picker.Item label="Gujarati" value="Gujarati" />
          {/* Add other languages here */}
        </Picker>
      </View>
      <Text style={styles.label}>password</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Text style={styles.label}>confirm password</Text>
      <TextInput
        placeholder="Enter your same password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.signup}>
        <Text style={styles.btnTxt}>SignUp</Text>
      </TouchableOpacity>
      <View style={styles.loginText}>
        <Text style={styles.ques}>Already a user?</Text>
        <Text style={styles.loginButton}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    paddingBottom: 4,
    // fontFamily: "Montserrat-Medium",
  },
  lang: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#005C9E", // Assuming a dark blue background from the image
  },
  header: {
    fontSize: 36,
    fontWeight: "700",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: "#5a778d",
  },
  picker: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    color: "#5a778d",
  },
  loginText: {
    marginTop: 20,
    alignItems: "center",
  },
  loginButton: {
    color: "white",
    textDecoration: "underline",
    fontWeight: 700,
  },
  signup: {
    backgroundColor: "#001a2e",
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderRadius: 4,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: "700",
    // fontFamily: "MontserratAlternates-Bold",
    color: "#e0f2ff",
    paddingVertical: 12,
    textAlign: "center",
  },
  ques: {
    color: "white",
    fontWeight: 100,
  },
});

export default SignUpScreen;
