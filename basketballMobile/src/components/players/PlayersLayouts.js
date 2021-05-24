import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import {routePaths} from "../../common/constants/routePaths";
import {Link} from "react-router-native";

export const PlayersLayout = () => {
  return (
      <View style={styles.container}>
          <Text>PlayersLayout</Text>
          <Link to={routePaths.auth.signIn}>
              <Text style={{textAlign: 'center', color: '#E4163A'}}>SignIn</Text>
          </Link>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
