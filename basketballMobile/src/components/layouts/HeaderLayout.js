import React from "react";
import { TouchableHighlight, View, Image, StyleSheet } from 'react-native';
import testLogo  from '../../static/images/Test3.png';

export const HeaderLayout = () => {
    return (
      <View style={styles.container}>
          <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {}}
          >
              <View style={styles.button}>
                  <View style={styles.buttonDivider} />
                  <View style={styles.buttonDivider} />
                  <View style={styles.buttonDivider} />
              </View>
          </TouchableHighlight>
          <Image style={styles.logo} source={testLogo} />
      </View>
    );
}

const styles = StyleSheet.create({
   container: {
     flex: 0.1,
     flexDirection: 'row',
     backgroundColor: '#fff',
     alignItems: 'center',
   },
   button: {
       width: 24,
       height: 24,
       justifyContent: 'space-evenly',
       alignItems: 'center',
       backgroundColor: "#fff",
       marginLeft: 15,
   },
    buttonDivider: {
      height: 2,
      width: 18,
      backgroundColor: '#868686',
      borderRadius: 15,
    },
   logo: {
      width: 137,
      height: 34,
      marginLeft: 86,
   },
});
