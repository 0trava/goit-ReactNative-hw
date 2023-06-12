import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './assets/Screens/LoginScreen';

export default function App() {
  return (
    <LoginScreen />






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