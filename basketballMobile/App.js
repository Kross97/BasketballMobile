import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { BaseSignRouter } from './src/components/sign/BaseSignRouter';
import { Provider } from "react-redux";
import { reducer } from "./src/store";
import {MemoryRouter, Switch, Route} from 'react-router-native';
import {configureStore} from "@reduxjs/toolkit";
import {routePaths} from "./src/common/constants/routePaths";
import {BaseDashBoard} from "./src/components/layouts/BaseDashBoard";

const store = configureStore({
  reducer,
})

const App = () => {
  return (
    <Provider store={store}>
      <MemoryRouter
          initialEntries={[routePaths.baseAuth]}
          initialIndex={0}
      >
        <View style={styles.container}>
          <Switch>
            <Route path={routePaths.baseAuth}>
               <BaseSignRouter />
            </Route>
            <Route path={routePaths.main.teams}>
               <BaseDashBoard />
            </Route>
          </Switch>
        </View>
      </MemoryRouter>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
