import React from 'react';
import {Route, Switch} from 'react-router-native';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {routePaths} from '../../common/constants/routePaths';

export const BaseSignRouter = () => {
  return (
    <Switch>
      <Route exact path={routePaths.auth.signIn}>
        <SignIn />
      </Route>
      <Route exact path={routePaths.auth.signUp}>
        <SignUp />
      </Route>
    </Switch>
  );
};
