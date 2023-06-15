import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

import IconOut from '../assets/images/postsscreen_icon_out.png';
import IconGrid from  '../assets/images/toolbar_grid.png';
import IconUnion from  '../assets/images/toolbar_union.png';
import IconUser from  '../assets/images/toolbar_user.png';
import Avatar from  '../assets/images/ava.png';

export default function PostsScreen() {
    const [fontsLoaded] = useFonts({
        'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      });
    const navigation = useNavigation();
    const {params} = useRoute();

  return (
    <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header} >
        <Text style={styles.header_title}>Публікації</Text>
        
        <TouchableOpacity style={styles.header_icon} onPress={()=> {}}>
            <Image source={IconOut} style={styles.header_iconOut} ></Image>
        </TouchableOpacity>

        </View>
        {/* BODY */}
        <View style={styles.body} >

            {/* USER */}
             <View style={styles.user_item}>
                <Image source={Avatar} style={styles.user_avatar} ></Image>
                <View>
                <Text style={styles.user_name}>{ params.login ? params.login : "Natali Romanova"}</Text>
                <Text style={styles.user_email}>{params.email}</Text>
                </View>
             </View>




        </View>
        {/* FOOTER */}
        <View style={styles.footer}>
            {/* ICON-GRID */}
            <TouchableOpacity style={styles.footer_icon} onPress={()=> {}}>
                <Image source={IconGrid} style={styles.header_iconGrid} ></Image>
            </TouchableOpacity>
            {/* ICON-BTN ADD */}
            <TouchableOpacity style={styles.footer_btn} onPress={()=> navigation.navigate("CreatePostsScreen")}>
                <Image source={IconUnion} style={styles.header_iconUnion} ></Image>
            </TouchableOpacity>
            {/* ICON-USER */}
            <TouchableOpacity style={styles.footer_icon} onPress={()=> {}}>
                <Image source={IconUser} style={styles.header_iconUser} ></Image>
            </TouchableOpacity>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

// STYLES for HEADER
    header: {
        position: "relative",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 11,
        backgroundColor: "#FFFFFF",

        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0.5},
        shadowRadius: 0.5,
        elevation: 3,
    },

    header_title: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: 17,
    },

    header_icon: {
        position: 'absolute',
        right: 10,
        bottom: 10,

    },

    header_iconOut: {
        width: 24,
        height: 24,
    },

// STYLES for BODY 
    body: {
        flex: 7,
        paddingLeft: 16,
        paddingTop: 32,
    },

    user_item: {
        // flex: 1,
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
    },

    user_avatar: {
        width: 60,
        height: 60,
        marginRight: 8,


    },

    user_name: {
        fontFamily: "Roboto",
        fontWeight: 700,
        fontSize: 13,
        lineHeight: 15,
        color: "#212121",
    },

    user_email: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 15,
        color: "rgba(33, 33, 33, 0.8);",

    },


// STYLES for FOOTER 
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#FFFFFF",

        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0.5},
        shadowRadius: 0.5,
        elevation: 8,
        
    },

    footer_btn:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
        width: 70,
        height: 40,
        marginTop: 9,
        marginLeft:39,
        marginRight: 39,

    
        backgroundColor: '#ff6c00',
        borderRadius: 20,
    },

    header_iconGrid: {
        width: 40,
        height: 40,
        marginTop: 9,

    },

    header_iconUnion: {
        width: 13,
        height: 13,
    },

    header_iconUser: {
        width: 40,
        height: 40,
        marginTop: 9,
    },

    




})