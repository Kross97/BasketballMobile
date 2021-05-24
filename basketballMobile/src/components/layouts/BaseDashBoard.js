import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {routePaths} from "../../common/constants/routePaths";
import {Link, Switch, Route, useLocation} from "react-router-native";
import {HeaderLayout} from './HeaderLayout';
import {TeamsLayouts} from "../teams/TeamsLayouts";
import {PlayersLayout} from "../players/PlayersLayouts";

export const BaseDashBoard = () => {
    const location = useLocation();

    console.log('LOCATION_BASE', location);
    return (
        <View style={styles.container}>
            <HeaderLayout/>
            <Switch>
                <Route exact path={routePaths.main.teams}>
                   <TeamsLayouts />
                </Route>
                <Route exact path={routePaths.main.players}>
                   <PlayersLayout />
                </Route>
            </Switch>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});
