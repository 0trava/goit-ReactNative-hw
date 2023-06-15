import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import PostsScreen from './PostsScreen';
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";


const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function Home() {
    const { params} = useRoute();
    // console.log(useRoute());
    console.log(params);




  return (
      <MainStack.Navigator initialRouteName="PostsScreen">{/* Аналог Routes */}

        <MainStack.Screen 
            name="PostsScreen" 
            component={PostsScreen} 
            initialParams={params}
            options={{
              headerShown: false,
            }} 
        />

        <MainStack.Screen 
            style={styles.header}
            name="CreatePostsScreen"
            component={CreatePostsScreen}

            options={{
                title: "Створити публікацію",
                justifyContent: "center",
                headerTitleStyle: {
                    fontWeight: 500,
                    fontSize: 17,
                    marginLeft: "20%",
                  },
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