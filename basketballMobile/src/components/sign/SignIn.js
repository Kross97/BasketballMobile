import React, { useState } from "react";
import {ImageBackground, StyleSheet, Button, Alert, TextInput, View, Text} from "react-native";
import {Link, useHistory} from 'react-router-native';
import signInImage from '../../static/images/signInPng.png';
import { routePaths } from "../../common/constants/routePaths";
import {useDispatch} from "react-redux";
import {authSignIn} from "../../store/asyncActions/auth";

export const SignIn = () => {
    const [signInForm, setStateForm] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    const redirectSuccess = () => {
      history.replace(routePaths.main.teams);
    };

    const changeState = (name, value) => {
      setStateForm((prev) => ({...prev, [name]: value}));
    };

    const submitForm = () => {
        dispatch(authSignIn({ signInForm, redirectSuccess}));
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={signInImage} imageStyle={{ height: 300}}
                             style={styles.image}>
                <View style={styles.containerForm}>
                    <TextInput placeholder={'Введите логин'} onChangeText={(login) => changeState('login', login)} style={styles.input}/>
                    <TextInput placeholder={'Введите пароль'} onChangeText={(password) => changeState('password', password)} style={styles.input}/>
                    <Button
                        color='#E4163A'
                        title='Sign In'
                        onPress={submitForm}
                    />
                    <Link to={routePaths.auth.signUp}>
                        <Text style={{ textAlign: 'center', color: '#E4163A'}}>SignUp</Text>
                    </Link>
                    <Link to={routePaths.main.teams}>
                        <Text style={{ textAlign: 'center', color: '#E4163A'}}>Teams</Text>
                    </Link>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FBFF',
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
