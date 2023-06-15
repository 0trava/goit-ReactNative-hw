import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Icon_camera from '../assets/images/icon_camera.png';
import IconLocation from  '../assets/images/icon_location.png';


const Tabs = createBottomTabNavigator();

function Settings() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile!</Text>
      </View>
    );
  }

export default function CreatePostsScreen() {
    const [loadImage, setloadImage] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [imageName, onChangeImageName ] = useState("");
    const [imageLocation, onChangeImageLocation ] = useState("");


    useEffect (() => {
        if (imageName === "" || imageLocation === "" || loadImage === ""){
        } else {
            setIsDisabled(false);
        }
    },[imageName, imageLocation, loadImage ]) 


  return (
    <View style={styles.container}>
        <View style={styles.image_box}>
            <Image source={loadImage} style={styles.header_iconOut} ></Image>
            <TouchableOpacity style={styles.addPhoto_link} onPress={() => {}}>
                 <Image source={Icon_camera} style={styles.addPhoto} ></Image>
            </TouchableOpacity>

        </View>

        <View style={styles.image_info}>
           <Text style={styles.text}>Завантажте фото</Text>

            {/* INPUT-Name */}
            <TextInput
                style={styles.input_name}
                onChangeText={onChangeImageName}
                placeholder="Назва..."
                keyboardType="default"
                autoComplete='name'
                value={imageName}
            />
            {/* INPUT-Location */}
            <TextInput
                style={styles.input_location}
                onChangeText={onChangeImageLocation}
                placeholder={`!!! Місцевість...`}
                keyboardType="email-address"
                returnKeyType="next"
                value={imageLocation}
            />

                        {/* BUTTON */}
            <TouchableOpacity  style={{...styles.button, backgroundColor: isDisabled? "#F6F6F6" : "#FF6C00"}} onPress={()=> {}} disabled={isDisabled}>
                <Text  style={styles.button_text}>Опубліковати</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        
    },

    image_box: {
        height: 240,
        width: 343,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 32,
        marginBottom: 8,
        position: "relative",
    },

    addPhoto_link: {
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        position: "absolute",
        top: 90,
        left: 142,
        justifyContent: "center",
        alignItems: "center",

    },

    addPhoto: {
        width: 20,
        height: 18,

    },

    text: {
        fontFamily: 'Roboto',
        color: '#BDBDBD',
        fontSize: 16,
        fontWeight: 400,



    },

    image_info: {
      width: 343,

    },

    input_name: {
        height: 50,
        width: "100%",
        marginTop: 32,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
        color: "#BDBDBD",
        fontFamily: 'Roboto',
        placeholder: "#BDBDBD",
        fontSize: 16,
    },

    input_location: {
        height: 50,
        width: "100%",
        marginTop: 32,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
        color: "#BDBDBD",
        fontFamily: 'Roboto',
        placeholder: "#BDBDBD",
        fontSize: 16,
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
        borderRadius: 100,
    },

    button_text: {
        color: "#FFFFFF",
        fontFamily: 'Roboto', 
        // fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,

    },

    containerBar: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },

})