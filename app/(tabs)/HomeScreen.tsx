import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation=useNavigation();
    return (
        <ImageBackground 
            source={require('../../assets/images/background.png')} 
            style={styles.background}
        >
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Login")}
            style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>Unlimited movies and series</Text>
                <Text style={styles.subtitle}>and much more. Enjoy wherever you want. Cancel whenever you want.</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        backgroundColor: '#e50914',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    content: {
        alignItems: 'center',
        marginTop: 200, 
    },
    title: {
        fontSize: 32,
        color: '#ffffff',
        textAlign: 'center',
        bottom: 150,
        padding:20,
    },
    subtitle: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
        bottom: 150,
        padding:20,
    },
});

export default HomeScreen;
