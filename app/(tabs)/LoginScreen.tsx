import { LoginInterface } from "@/interfaces/LoginInterface";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const API_BASE = "http://192.168.1.11:8000";

const schema = Yup.object().shape({
  username: Yup.string()
    .email("Formato de correo incorrecto.")
    .required("Correo es obligatorio."),
  password: Yup.string().required("Contraseña es obligatoria."),
});

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInterface>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInterface) => {
    try {
      console.log(`${API_BASE}/login`);
      fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/document",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error posting data:", error));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/netflix_logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Registra tus datos</Text>

      {/* Campo de correo */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="CORREO"
            keyboardType="email-address"
            placeholderTextColor="#999"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}

      {/* Campo de contraseña */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="CONTRASEÑA"
            secureTextEntry
            placeholderTextColor="#999"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}> INICIO DE SESIÓN </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.newNetflix}>¿Nuevo en Netflix? Regístrate.</Text>
      </TouchableOpacity>
      <Text style={styles.message}>
        This page is protected by Google CAPTCHA to ensure you're not a bot.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 16,
  },
  logo: {
    width: 500,
    height: 150,
    resizeMode: "contain", // Mantiene la relación de aspecto
    marginBottom: 0,
    top: -100,
  },
  title: {
    bottom: 100,
    fontSize: 32,
    color: "#ffffff",
    marginBottom: 24,
    textAlign: "center",
  },
  forgotPassword: {
    bottom: 90,
    color: "#ffffff",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline", // Subrayado para simular un enlace
  },
  newNetflix: {
    bottom: 60,
    color: "#ffffff",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline", // Subrayado para simular un enlace
  },
  message: {
    fontSize: 10,
    bottom: -80,
    color: "#ffffff",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    bottom: 100,
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    color: "#333333",
    width: "80%",
  },
  button: {
    bottom: 100,
    backgroundColor: "#e50914",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "#e50914",
    marginBottom: 10,
    bottom: 100,
  },
});

export default LoginScreen;
