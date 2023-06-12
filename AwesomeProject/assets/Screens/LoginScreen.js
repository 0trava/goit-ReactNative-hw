import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import { useFonts } from 'expo-font';

export default function LoginScreen() {
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('../fonts/Roboto-Medium.ttf'),
      });
    const [email, onChangeEmail] = React.useState('');

  return (
    <ImageBackground source={require('../images/background.png')} style={styles.background}>
        <View  style={styles.login_page}>
            <Text  style={styles.login_title}>Увійти</Text>
            <TextInput
                style={styles.input_name}
                onChangeText={onChangeEmail}
                placeholder="e-mail@example.com"
                keyboardType="email-address"
                value={email}
            />


        </View>

    </ImageBackground>
  )
}







// STYLES --------------

const styles = StyleSheet.create({
    background: {
        flex: 1,
        position: 'relative',
    },

    login_page: {

        position: 'absolute',
        width: '100%',
        height: 489,
        left: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

    },

    login_title: {
        fontFamily: 'Roboto-Regular', 
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
        marginTop: 32,

    },

    input_name: {

    }




})