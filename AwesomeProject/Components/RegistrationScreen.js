import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useFonts } from 'expo-font';
import add_icon from '../assets/images/add_icon.png';

export default function RegistrationScreen() {
    const [fontsLoaded] = useFonts({
        'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      });
    const [login, onChangeLogin] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const onRegistartion = () => {
        console.log(`Form submite login = ${login} email = ${email} password = ${password}`);
        onChangeLogin("");
        onChangeEmail("");
        onChangePassword("");
        setIsDisabled(true);
      };

      useEffect (() => {
        if (email === "" || password === "" || login === ""){

        } else {
            setIsDisabled(false);
        }

    },[email, password]) 



  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
        <View  style={styles.login_page}>
            {/* INPUT-avatar*/}
            <View  style={styles.avatar_block}>
                <TouchableOpacity  style={styles.avatar_btn} onPress={()=> {}}>
                <Image source={add_icon} style={styles.avatar_btn_img}></Image>
                </TouchableOpacity>


            </View>

            <Text  style={styles.login_title}>Реєстрація</Text>
            {/* INPUT-login */}
            <TextInput
                style={styles.input_name}
                onChangeText={onChangeLogin}
                placeholder="Логін"
                keyboardType="default"
                autoComplete='name'
                value={login}
            />
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
            <TouchableOpacity  style={{...styles.button, opacity: isDisabled? 0.3 : 1}} onPress={onRegistartion} disabled={isDisabled}>
                <Text  style={styles.button_text}>Зареєстуватися</Text>
            </TouchableOpacity>



            {/* TEXT */}
            <View style={styles.text_block}>
                <Text  style={styles.text}>Вже є акаунт?  </Text>
                <TouchableOpacity style={styles.text_link} onPress={()=> {}}><Text  style={styles.text_link}>Увійти</Text></TouchableOpacity>
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
        height: "67%",
        left: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        display:"flex",
        justifyContent: "flex-start",

    },

    avatar_block: {
        position: "relative",
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        top: -60,
        left: "35%",
        bottom: 0,
    },

    avatar_btn: {
        position: "absolute",

        right: -12.5,
        bottom: 14,


    },

    avatar_btn_img: {
        width: 25,
        height: 25,

    },

    login_title: {
        fontFamily: 'Roboto', 
        fontWeight: 600,
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        marginTop: -32,
        marginBottom: 17,

    },

    input_name: {
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