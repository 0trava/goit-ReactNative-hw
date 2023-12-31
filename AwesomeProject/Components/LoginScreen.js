import { 
    ImageBackground, 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';

export default function LoginScreen() {
    const [fontsLoaded] = useFonts({
        'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      });
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [secureText, setSecureText] = useState(true);
    const [validEmail, setValidEmail] = useState(false);


    const showSecureText = () => {
        setSecureText(!secureText);
    }

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (reg.test(text) === false) {
          console.log("Email is Not Correct");
          onChangeEmail(text);
          setValidEmail(false);
        }
        else {
          onChangeEmail(text);
          setValidEmail(true);
          console.log("Email is Correct");
        }
      }


    useEffect (() => {
        if (email === "" || password === ""){
        } else {
            setIsDisabled(false);
        }
    },[email, password]) 

    const onLogin = () => {
        if (validEmail) {
            console.log(`Form submite email = ${email} password = ${password}`);
            onChangeEmail("");
            onChangePassword("");
            setIsDisabled(true);
            navigation.navigate("Home", { email: email, password: password });
        } else {

            Alert.alert('Email is Not Correct');
            console.log('Email is Not Correct');
        }

      };


  return (
    <TouchableWithoutFeedback 
    onPress={Keyboard.dismiss}
    >
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>

        <TouchableWithoutFeedback 
        // onPress={Keyboard.dismiss}
        >
        <View  style={styles.login_page}>
        <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <Text  style={styles.login_title}>Увійти</Text>
            {/* INPUT-email */}
            <TextInput
                style={styles.input_name}
                onChangeText={(text) => validate(text)}
                placeholder="Адреса електронної пошти"
                testID="LoginEmailAddress"
                textContentType="emailAddress"
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
                    secureTextEntry={secureText}
                    onFocus={()=> {}}
                />
                <TouchableOpacity style={styles.input_btn} onPress={showSecureText}>
                    <Text  style={styles.text}>{secureText?  "Показати" : "Сховати" }</Text>
                </TouchableOpacity>
            </View>

            {/* BUTTON */}
            <TouchableOpacity style={{...styles.button, opacity: isDisabled? 0.3 : 1}} onPress={onLogin} disabled={isDisabled}>
                <Text  style={styles.button_text}>Увійти</Text>
            </TouchableOpacity>




            {/* TEXT */}
            <View style={styles.text_block}>
                <Text  style={styles.text}>Немає акаунту? </Text>
                <TouchableOpacity style={styles.text_link} onPress={() => navigation.navigate("Registration")}><Text  style={styles.text_link}>Зареєструватися</Text></TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            </View>
            </TouchableWithoutFeedback>
    </ImageBackground>
    </TouchableWithoutFeedback>
  )
}







// STYLES --------------

const styles = StyleSheet.create({

    background: {
        flex: 1,
        position: 'relative',
        justifyContent: "flex-end",
    },

    login_page: {

        position: 'absolute',
        width: '100%',
        height: "55%",
        left: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        display:"flex",
        justifyContent: "flex-start",

    },

    // keyboardOpen: {
    //     backgroundColor: "red",
    //     marginBottom: 32,
    //     // height: 489,
    // },


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