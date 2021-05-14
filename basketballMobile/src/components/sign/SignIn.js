import React, { useState } from "react";
import {ImageBackground, StyleSheet, Button, Alert, TextInput, View, Text} from "react-native";
import {Link} from 'react-router-native';
import { signIn } from '../../api/auth/index';
import signInImage from '../../static/images/signInPng.png';

export const SignIn = () => {
    const [stateForm, setStateForm] = useState({});

    const changeState = (name, value) => {
      setStateForm((prev) => ({...prev, [name]: value}));
    };

    const submitForm = async () => {
        const s = await signIn('Auth/SignIn', JSON.stringify({
            login: "Bezh1Rn",
            password: "1"
        }))
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={signInImage} imageStyle={{ height: 300}}
                             style={styles.image}>
                <View style={styles.containerForm}>
                    <TextInput onChangeText={(login) => changeState('login', login)} style={styles.input}/>
                    <TextInput onChangeText={(password) => changeState('password', password)} style={styles.input}/>
                    <Button
                        color='#E4163A'
                        title='Sign In'
                        onPress={submitForm}
                    />
                    <Link to="/signUp">
                        <Text style={{ textAlign: 'center', color: '#E4163A'}}>SignUp</Text>
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
