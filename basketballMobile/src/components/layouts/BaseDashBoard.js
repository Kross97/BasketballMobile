import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import {routePaths} from "../../common/constants/routePaths";
import {Link} from "react-router-native";
import { HeaderLayout } from '../layouts/HeaderLayout';

export const BaseDashBoard = () => {
  return (
      <View style={styles.container}>
          <HeaderLayout />
          <Text>asdfasdfdasf</Text>
          <Link to={routePaths.auth.signIn}>
              <Text style={{ textAlign: 'center', color: '#E4163A'}}>SignIn</Text>
          </Link>
      </View>
  );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
});
