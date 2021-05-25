import React, {useState, useRef} from 'react';
import {
    TouchableHighlight,
    View,
    Image,
    StyleSheet,
    Pressable,
    Animated,
    Text,
} from 'react-native';
import {useLocation, useHistory} from 'react-router-native';
import testLogo from '../../static/images/Test3.png';
import {PersonsSVG} from '../svgComponents/Persons';
import {PersonSVG} from '../svgComponents/Person';
import {InputSVG} from '../svgComponents/Input';
import {routePaths} from '../../common/constants/routePaths';
import ImagePicker from 'react-native-image-crop-picker';

export const HeaderLayout = () => {
    const location = useLocation();
    const history = useHistory();
    const leftOffset = useRef(new Animated.Value(-220)).current;
    const [isMenuShow, setMenuShow] = useState(false);

    const toggleMenu = () => {
        setMenuShow(!isMenuShow);
        const toValue = isMenuShow ? -220 : -10;
        Animated.timing(leftOffset, {
            toValue,
            duration: 600,
        }).start();
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    };

    const changeRoute = route => {
        history.push(route);
        toggleMenu();
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    style={styles.buttonTouch}
                    onPress={toggleMenu}>
                    <View style={styles.button}>
                        <View style={styles.buttonDivider}/>
                        <View style={styles.buttonDivider}/>
                        <View style={styles.buttonDivider}/>
                    </View>
                </TouchableHighlight>
                <Image style={styles.logo} source={testLogo}/>
            </View>
            {isMenuShow && (
                    <View style={styles.backgroundMenu} pointerEvents={'box-only'}/>
            )}
            <Animated.View
                style={[
                    styles.menu,
                    {
                        left: leftOffset,
                    },
                ]}>
                <View style={styles.menuItems}>
                    <TouchableHighlight
                        underlayColor={'#6b6b6b'}
                        onPress={() => changeRoute(routePaths.main.teams)}
                        style={styles.menuItem}>
                        <>
                            <PersonsSVG isTeams={/\/teams/.test(location.pathname)}/>
                            <Text
                                style={{
                                    color: /\/teams/.test(location.pathname) ? '#E4163A' : '#DADADA',
                                }}>
                                Teams
                            </Text>
                        </>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#6b6b6b'}
                        onPress={() => changeRoute(routePaths.main.players)}
                        style={styles.menuItem}>
                        <>
                            <PersonSVG isPlayers={/\/players/.test(location.pathname)}/>
                            <Text
                                style={{
                                    color: /\/players/.test(location.pathname) ? '#E4163A' : '#DADADA',
                                }}>
                                Players
                            </Text>
                        </>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    underlayColor={'#6b6b6b'}
                    onPress={() => changeRoute(routePaths.baseAuth)}
                    style={[styles.menuItem, {flex: 0.1}]}>
                    <>
                        <InputSVG/>
                        <Text style={{color: '#E4163A'}}>Sign out</Text>
                    </>
                </TouchableHighlight>
            </Animated.View>
        </>
    );
};

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
    },
    buttonTouch: {
        width: 44,
        height: 44,
        borderRadius: 25,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginLeft: 66,
    },
    backgroundMenu: {
        top: -15,
        left: -10,
        right: -10,
        bottom: -15,
        elevation: 299,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0, 0.8)',
    },
    menu: {
        flex: 1,
        justifyContent: 'space-between',
        top: -15,
        bottom: -15,
        width: 200,
        elevation: 300,
        position: 'absolute',
        backgroundColor: '#fff',
    },
    menuItems: {
        flex: 0.25,
        justifyContent: 'space-between',
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
