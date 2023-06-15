import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PostsScreen from './PostsScreen';
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function Home() {
  return (
      <MainStack.Navigator initialRouteName="PostsScreen">{/* Аналог Routes */}

        <MainStack.Screen 
            name="PostsScreen" 
            component={PostsScreen} 
            options={{
              headerShown: false,
            }} 
        />

        <MainStack.Screen 
            style={styles.header}
            name="CreatePostsScreen"
            title="Створити публікацію" 
            component={CreatePostsScreen}
            options={{
                title: "Створити публікацію",
                justifyContent: "center",
              }}  /> 


        <MainStack.Screen 
            name="ProfileScreen" 
            title="Публікації" 
            component={ProfileScreen} />
      </MainStack.Navigator>
  )
}

const styles = StyleSheet.create({

})