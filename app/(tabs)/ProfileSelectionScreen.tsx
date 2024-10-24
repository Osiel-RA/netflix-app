import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Importación de imágenes de perfil y otros recursos
const profileImage1 = require('../../assets/images/profile1.png');
const profileImage2 = require('../../assets/images/profile2.png');
const profileImage3 = require('../../assets/images/profile3.png');
const profileImage4 = require('../../assets/images/profile4.png');
const netflixLogo = require('../../assets/images/netflix-logo-ProfileSelectionScreen.png');
const addProfileImage = require('../../assets/images/add_profile.png');

const ProfileSelectionScreen = () => {
    // Estado para manejar si esta en modo edición o no
    const [editMode, setEditMode] = useState(false);

    // Lista de perfiles de usuario
    const profiles = [
        { id: 1, name: 'Perfil 1', image: profileImage1 },
        { id: 2, name: 'Perfil 2', image: profileImage2 },
        { id: 3, name: 'Perfil 3', image: profileImage3 },
        { id: 4, name: 'Perfil 4', image: profileImage4 },
    ];

    // Animación de opacidad para los perfiles
    const opacityAnim = useRef(new Animated.Value(1)).current;

    // Función para alternar entre el modo edición y vista normal
    const toggleEditMode = () => {
        Animated.timing(opacityAnim, {
            toValue: editMode ? 1 : 0.5, // Cambia la opacidad en función del modo edición
            duration: 300,
            useNativeDriver: true,
        }).start();
        setEditMode(!editMode); // Cambia el estado del modo edición
    };

    return (
        <View style={styles.container}>
            {/* Logotipo de Netflix */}
            <Image source={netflixLogo} style={styles.netflixLogo} />

            {/* Botón global para activar o desactivar el modo edición */}
            <TouchableOpacity style={styles.editIconGlobal} onPress={toggleEditMode}>
                <Icon name="pencil" size={28} color="#fff" />
            </TouchableOpacity>

            {/* Título que cambia según el modo (edición o selección) */}
            <Text style={styles.title}>
                {editMode ? "Administrar perfiles" : "¿Quién está viendo ahora?"}
            </Text>

            {/* Contenedor para los perfiles */}
            <View style={styles.gridContainer}>
                {profiles.map((profile) => (
                    <TouchableOpacity key={profile.id} style={styles.profileContainer}>
                        {/* Imagen de perfil con opacidad animada */}
                        <Animated.Image
                            source={profile.image}
                            style={[styles.profileImage, { opacity: opacityAnim }]}
                        />
                        {/* Nombre del perfil con opacidad animada */}
                        <Animated.Text style={[styles.profileName]}>
                            {profile.name}
                        </Animated.Text>
                        {/* Ícono de lápiz que solo aparece en modo edición */}
                        {editMode && (
                            <View style={styles.editIconPencil}>
                                <Icon name="pencil" size={24} color="#fff" />
                            </View>
                        )}
                    </TouchableOpacity>
                ))}

                {/* Botón para agregar un nuevo perfil */}
                <TouchableOpacity style={styles.profileContainer}>
                    <Image source={addProfileImage} style={styles.addProfileImage} />
                    <Text style={styles.profileName}>Agregar perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Estilos para la pantalla de selección de perfil
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Fondo negro
    },
    netflixLogo: {
        position: 'absolute',
        top: 0,
        width: 150,
        height: 100,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '80%',
    },
    profileContainer: {
        alignItems: 'center',
        width: '45%',
        marginBottom: 20,
        position: 'relative',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 10, // Bordes redondeados para las imágenes
    },
    profileName: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10,
    },
    addProfileImage: {
        width: 100,
        height: 100,
        borderRadius: 10, // Bordes redondeados para la imagen de agregar perfil
    },
    editIconGlobal: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#333',
        borderRadius: 20,
        padding: 10, // Ícono de lápiz global para activar el modo edición
    },
    editIconPencil: {
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: [{ translateX: -12 }, { translateY: -12 }],
        alignItems: 'center',
        justifyContent: 'center', // Ícono de lápiz que aparece en cada perfil en modo edición
    },
});

export default ProfileSelectionScreen;
