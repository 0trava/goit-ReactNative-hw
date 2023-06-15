
// import { StyleSheet} from 'react-native';
// import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import LoginScreen from './Components/LoginScreen';
import RegistrationScreen from './Components/RegistrationScreen';
// import PostsScreen from './Screens/PostsScreen';
import Home from './Screens/Home';



const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  




  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">{/* Аналог Routes */}

        <MainStack.Screen 
            name="Registration" 
            component={RegistrationScreen} 
            options={{
              headerShown: false,
            }} 
        />{/* Аналог Route */}

        <MainStack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
              headerShown: false, 
            }} /> 
          {/* Прибираємо Хедер */}

        <MainStack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false, 
            }}/>
      </MainStack.Navigator>
    </NavigationContainer>
    )

  };







    // <View style={styles.container}>
    //   <Text>Hello world!</Text>
    //   <StatusBar style="auto" />
      
      
    // </View>


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
