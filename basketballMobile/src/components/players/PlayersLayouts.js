import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Image, Animated} from 'react-native';
import {routePaths} from '../../common/constants/routePaths';
import {Link, useHistory} from 'react-router-native';
import playersEmpty from "../../static/images/playersEmpty.png";

export const PlayersLayout = () => {
    const [isShowSelect, setShowSelect] = useState(false);
    const heightSelect = useRef(new Animated.Value(0)).current;
    const history = useHistory();

    const changeStateSelectMenu = () => {
        setShowSelect(!isShowSelect);
        const toValue = isShowSelect ? 150 : 0;
        console.log('CHANGE_SELECT', isShowSelect, toValue);
        Animated.timing(heightSelect, {
           toValue,
           duration: 500,
        }).start();
    };

  return (
      <View style={styles.container}>
          <TextInput
              placeholderTextColor={'#707070'}
              placeholder={'Search...'}
              style={styles.formItem}
          />
          <TouchableHighlight
              placeholderTextColor={'#707070'}
              placeholder={'Select...'}
              activeOpacity={0.2}
              underlayColor={'#bababa'}
              style={[styles.formItem, styles.selectContainer]}
              onPress={changeStateSelectMenu}
          >
              <>
                  <Text>Select...</Text>
                  <Animated.ScrollView
                      onScroll={(e) => {
                          e.nativeEvent.stopPropagation();
                      }}
                      style={[
                          styles.select,
                          {
                              height: heightSelect,
                          }
                      ]}
                  >
                      <Text>fasdffffffffffffffffffffffffffdasfdsafdasf</Text>
                      <Text>fasdffffffffffffffffffffffffffdasfdsafdasf</Text>
                      <Text>fasdffffffffffffffffffffffffffdasfdsafdasf</Text>
                      <Text>fasdffffffffffffffffffffffffffdasfdsafdasf</Text>
                      <Text>fasdffffffffffffffffffffffffffdasfdsafdasf</Text>
                      <Text>fasdffffffffffffffffffffffffffdasfdsafdasf</Text>
                  </Animated.ScrollView>
              </>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#BF1231'}
              onPress={() => history.push(routePaths.main.formAddPlayer)}
              style={[styles.formItem, styles.addItem]}>
              <Text style={{fontSize: 15, color: '#fff'}}>Add +</Text>
          </TouchableHighlight>
          <View style={styles.content}>
              <Image source={playersEmpty} />
              <View>
                  <Text style={styles.emptyText}>Empty here</Text>
                  <Text style={{color: '#707070', letterSpacing: 0.7}}>
                      Add new players to continue
                  </Text>
              </View>
          </View>
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
    selectContainer: {
        position: 'relative',
        elevation: 100,
        justifyContent: 'center',
    },
    select: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
    },
});

