import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Components/LoginScreen';
import RegistrationScreen from './Components/RegistrationScreen';
import PostsScreen from './Screens/PostsScreen';

export default function App() {
  return (
    // <LoginScreen />
    <RegistrationScreen />
    // <PostsScreen />








    // <View style={styles.container}>
    //   <Text>Hello world!</Text>
    //   <StatusBar style="auto" />
      
      
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
