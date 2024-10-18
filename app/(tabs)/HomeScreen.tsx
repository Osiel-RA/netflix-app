import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define los tipos de las rutas
type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
};

// Define el tipo para la navegación
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Tipar el hook de navegación

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")} // Navegación al login
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>Inicio de sesión</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Películas y series ilimitadas</Text>
        <Text style={styles.subtitle}>
          y mucho más. Disfruta donde quieras. Cancela cuando quieras.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: "#e50914",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default HomeScreen;
