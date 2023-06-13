import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React from 'react';

import IconOut from '../images/postsscreen_icon_out.png';

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
        <Text>FOOTER</Text>
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
        // shadowColor: "rgba(0, 0, 0, 0.3)",
        // shadowRadius: 0.5,
        // elevation: 1,

        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0.5},
        shadowRadius: 0.5,
        elevation: 3,
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

    },


    header_title: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: 17,
        // lineHeight: 22,


    },

})