import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './assets/Screens/LoginScreen';
import RegistrationScreen from './assets/Screens/RegistrationScreen';

export default function App() {
  return (
    // <LoginScreen />
    <RegistrationScreen />







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
