import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/images/netflix_logo.png')} // Dos puntos para subir dos niveles
                style={styles.logo}
            />
            <Text style={styles.title}>Registra tus datos</Text>
            <TextInput 
                style={styles.input} 
                placeholder="CORREO" 
                keyboardType="email-address" 
                placeholderTextColor="#999"
            />
            <TextInput 
                style={styles.input} 
                placeholder="CONTRASEÑA" 
                secureTextEntry 
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>    INICIO DE SESION    </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* link */ }}>
                <Text style={styles.forgotPassword}>Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* link */ }}>
                <Text style={styles.newNetflix}>¿Nuevo en Netflix? Registrate.</Text>
            </TouchableOpacity>
            <Text style={styles.message}>This page is protected by Google CAPTCHA to
            ensure you're not a bot.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000', 
        padding: 16,
    },
    logo: {
        width: 500, 
        height: 150,
        resizeMode: 'contain', // Mantiene la relación de aspecto
        marginBottom: 0, 
        top:-100,
    },
    title: {
        bottom: 100,
        fontSize: 32,
        color: '#ffffff',
        marginBottom: 24,
        textAlign: 'center',
    },
    forgotPassword: {
        bottom: 90,
        color: '#ffffff', 
        fontSize: 14, 
        marginTop: 20, 
        textAlign: 'center', 
        textDecorationLine: 'underline', // Subrayado para simular un enlace
    },
    newNetflix: {
        bottom: 60,
        color: '#ffffff', 
        fontSize: 14, 
        marginTop: 20,
        textAlign: 'center',
        textDecorationLine: 'underline', // Subrayado para simular un enlace
    },
    message: {
        fontSize: 10,
        bottom: -80,
        color: '#ffffff',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        bottom: 100,
        height: 50,
        borderColor: '#cccccc', 
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 12,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0', 
        color: '#333333', 
        width: '80%', 
    },
    button: {
        bottom: 100,
        backgroundColor: '#e50914', 
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '80%', 
    },
    buttonText: {
        color: '#ffffff', 
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
