import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Image} from 'react-native';
import {routePaths} from "../../common/constants/routePaths";
import {Link} from "react-router-native";
import teamsEmpty from '../../static/images/teamsEmpty.png';

export const TeamsLayouts = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor={'#707070'} placeholder={'Search...'} style={styles.formItem}/>
            <TouchableHighlight underlayColor={'#BF1231'} onPress={() => {
            }} style={[styles.formItem, styles.addItem]}>
                <Text style={{fontSize: 15, color: '#fff'}}>Add +</Text>
            </TouchableHighlight>
            <View style={styles.content}>
                <Image source={teamsEmpty}/>
                <View>
                    <Text style={styles.emptyText}>Empty here</Text>
                    <Text style={{ color: '#707070', letterSpacing: 0.7 }}>Add new teams to continue</Text>
                </View>
            </View>
            <Link to={routePaths.auth.signIn}>
                <Text style={{textAlign: 'center', color: '#E4163A'}}>SignIn</Text>
            </Link>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formItem: {
        height: 40,
        marginTop: 16,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#D1D1D1',
        paddingLeft: 12,
        paddingRight: 12,
    },
    addItem: {
        backgroundColor: '#E4163A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.7,
        marginTop: 16,
        paddingBottom: 28,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    emptyText: {
        textAlign: 'center',
        color: '#FF768E',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
