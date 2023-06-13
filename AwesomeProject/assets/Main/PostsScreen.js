import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React from 'react';

import IconOut from '../images/postsscreen_icon_out.png';
import IconGrid from  '../images/toolbar_grid.png';
import IconUnion from  '../images/toolbar_union.png';
import IconUser from  '../images/toolbar_user.png';

export default function PostsScreen() {
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
        <Text>BODY</Text>
        </View>
        {/* FOOTER */}
        <View style={styles.footer}>
            {/* ICON-GRID */}
            <TouchableOpacity style={styles.footer_icon} onPress={()=> {}}>
                <Image source={IconGrid} style={styles.header_iconGrid} ></Image>
            </TouchableOpacity>
            {/* ICON-BTN */}
            <TouchableOpacity style={styles.footer_btn} onPress={()=> {}}>
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


    body: {
        flex: 7,
        // backgroundColor: "#FF6C00",
    },

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