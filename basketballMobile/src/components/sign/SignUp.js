import React, {useState} from "react";
import {ImageBackground, StyleSheet, Button, Alert, TextInput, View, Text} from "react-native";
import {Link, useHistory} from 'react-router-native';
import signOut from '../../static/images/signOutPng.png';
import {useDispatch} from "react-redux";
import {authSignUp } from "../../store/asyncActions/auth";
import {routePaths} from "../../common/constants/routePaths";

export const SignUp = () => {
    const [signUpForm, setSignUpForm] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    const redirectSuccess = () => {
      history.replace(routePaths.main.teams);
    };

    const changeValuesForm = (nameField, text) => {
        setSignUpForm((prev) => ({...prev, [nameField]: text}));
    };

    const submitForm = () => {
       dispatch(authSignUp({ signUpForm, redirectSuccess }));
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={signOut} imageStyle={{height: 300}}
                             style={styles.image}>
                <View style={styles.containerForm}>
                    <TextInput placeholder={'Введите имя'} onChangeText={(text) => changeValuesForm('userName', text)} style={styles.input}/>
                    <TextInput placeholder={'Введите логин'} onChangeText={(text) => changeValuesForm('login', text)} style={styles.input}/>
                    <TextInput placeholder={'Введите пароль'} onChangeText={(text) => changeValuesForm('password', text)} style={styles.input}/>
                    <TextInput placeholder={'Повторите пароль'} onChangeText={(text) => changeValuesForm('repeatPassword', text)} style={styles.input}/>
                    <Button
                        color='#E4163A'
                        title='Sign Up'
                        onPress={submitForm}
                    />
                    <Link style={{ backgroundColor: '#fff'}} to={routePaths.baseAuth}>
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
