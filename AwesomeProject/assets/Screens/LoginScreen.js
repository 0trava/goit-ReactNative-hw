import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

import { useFonts } from 'expo-font';

export default function LoginScreen() {
    const [fontsLoaded] = useFonts({
        'Roboto': require('../fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('../fonts/Roboto-Medium.ttf'),
      });
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');


  return (
    <ImageBackground source={require('../images/background.png')} style={styles.background}>
        <View  style={styles.login_page}>
            <Text  style={styles.login_title}>Увійти</Text>
            {/* INPUT-email */}
            <TextInput
                style={styles.input_name}
                onChangeText={onChangeEmail}
                placeholder="Адреса електронної пошти"
                keyboardType="email-address"
                autoComplete='email'
                returnKeyType="next"
                value={email}
            />
            {/* INPUT-Password */}
            <View position="relative">
                <TextInput
                    style={styles.input_password}
                    onChangeText={onChangePassword}
                    placeholder="••••••••••••"
                    autoComplete='current-password'
                    value={password}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.input_btn} onPress={()=> {}}>
                    <Text  style={styles.text}>Показати</Text>
                </TouchableOpacity>
            </View>

            {/* BUTTON */}
            <TouchableOpacity style={styles.button} onPress={()=> {}}>
                <Text  style={styles.button_text}>Увійти</Text>
            </TouchableOpacity>
            {/* TEXT */}
            <View style={styles.text_block}>
                <Text  style={styles.text}>Немає акаунту? </Text>
                <TouchableOpacity style={styles.text_link} onPress={()=> {}}><Text  style={styles.text_link}>Зареєструватися</Text></TouchableOpacity>
            </View>
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
        display:"flex",
        justifyContent: "flex-start",

    },

    login_title: {
        fontFamily: 'Roboto', 
        fontWeight: 600,
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        marginTop: 32,

    },

    input_name: {
        width: '90%',
        height: 50,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 33,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        paddingLeft: 16,

        fontFamily: 'Roboto', 
        color: '#BDBDBD',
        fontSize: 16,
        lineHeight: 19,


    },


    input_password: {
        width: '90%',
        height: 50,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        paddingLeft: 16,

        fontFamily: 'Roboto', 
        // fontWeight: 400,
        color: '#212121',
        fontSize: 16,
        lineHeight: 19,

    },

    input_btn: {
        position: 'absolute',
        top: "45%",
        right: "10%",
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
        width: '90%',
        height: 51,
        marginTop: 43,
        marginLeft:16,
        marginBottom: 16,

    
        backgroundColor: '#ff6c00',
    
        borderRadius: 100,
    },

    button_text: {
        color: "#FFFFFF",
        fontFamily: 'Roboto', 
        // fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,

    },

    text_block: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",

    },

    text: {
        fontFamily: 'Roboto', 
        // fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    },

    text_link: {
        fontFamily: 'Roboto', 
        // fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
        textDecorationLine: "underline",
    },





})