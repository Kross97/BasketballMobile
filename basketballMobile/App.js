import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { SignIn } from "./src/components/sign/SignIn";
import { SignUp } from './src/components/sign/SignUp';
import {MemoryRouter, Switch, Route, Link} from 'react-router-native';

const App = () => {
  return (
    <MemoryRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path='/'>
            <SignIn />
          </Route>
          <Route exact path='/signUp'>
            <SignUp />
          </Route>
        </Switch>
      </View>
    </MemoryRouter>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
