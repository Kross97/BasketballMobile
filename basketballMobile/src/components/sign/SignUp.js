import React from "react";
import {ImageBackground, StyleSheet, Button, Alert, TextInput, View, Text} from "react-native";
import {Link} from 'react-router-native';
import signOut from '../../static/images/signOutPng.png';

export const SignUp = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={signOut} imageStyle={{height: 300}}
                             style={styles.image}>
                <View style={styles.containerForm}>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                    <Button
                        color='#E4163A'
                        title='Sign In'
                        onPress={() => Alert.alert('EPT!')}
                    />
                    <Link to="/">
                        <Text style={{ textAlign: 'center', color: '#E4163A'}}>SignIn</Text>
                    </Link>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerForm: {
        padding: 12,
        justifyContent: 'center',
        marginBottom: '20%',
        backgroundColor: 'rgba(255,255,255, 0.9)',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
    },
    text: {
        color: "#000",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: 'rgba(255,255,255,0.1)',
    }
});
