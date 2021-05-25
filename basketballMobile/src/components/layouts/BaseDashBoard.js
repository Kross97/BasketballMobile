import React from 'react';
import {View, KeyboardAvoidingView, StyleSheet, Platform} from 'react-native';
import {routePaths} from '../../common/constants/routePaths';
import {Switch, Route, useLocation} from 'react-router-native';
import {HeaderLayout} from './HeaderLayout';
import {TeamsLayouts} from '../teams/TeamsLayouts';
import {PlayersLayout} from '../players/PlayersLayouts';
import {FormAddTeam} from "../teams/FormAddTeam";
import {FormAddPlayer} from "../players/FormAddPlayer";

export const BaseDashBoard = () => {
  const location = useLocation();

  console.log('BASE_PATH', location.pathname);
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        enabled={false}
    >
      <HeaderLayout />
      <Switch>
        <Route exact path={routePaths.main.teams}>
          <TeamsLayouts />
        </Route>
        <Route exact path={routePaths.main.formAddTeam}>
          <FormAddTeam />
        </Route>
        <Route exact path={routePaths.main.players}>
          <PlayersLayout />
        </Route>
        <Route exact path={routePaths.main.formAddPlayer}>
          <FormAddPlayer />
        </Route>
      </Switch>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
