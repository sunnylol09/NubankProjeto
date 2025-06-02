import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '@expo/metro-runtime'
import Tela1 from './Tela1'
import { Stack } from "expo-router";

const App = () => {

  return (
    <Stack screenOptions={{headerShown:false}} >
      <Stack.Screen name="Tela1" options={{title:'Tela1',animation: 'fade' }} />
      <Stack.Screen name="Tela2" options={{title:'Tela2',animation: 'ios_from_right'}} />
      <Stack.Screen name="Tela3" options={{title:'Tela3', animation: 'ios_from_right'}} />
      <Stack.Screen name="Tela4" options={{title:'Tela4', animation: 'fade_from_bottom'}} />
    </Stack>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
