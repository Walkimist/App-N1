import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main';

import At1 from './screens/At1';
import Quotes from './screens/At1/Quotes';
import Cronometro from './screens/At1/Cronometro';
import ContadorRestaurante from './screens/At1/ContadorRestaurante';
import FortuneCookie from './screens/At1/FortuneCookie';

import At2 from './screens/At2';

import About from './screens/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen name="At1" component={At1} />
        <Stack.Screen name="Quotes" component={Quotes} />
        <Stack.Screen name="Cronometro" component={Cronometro} />
        <Stack.Screen name="ContadorRestaurante" component={ContadorRestaurante} />
        <Stack.Screen name="FortuneCookie" component={FortuneCookie} />

        <Stack.Screen name="At2" component={At2} />

        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer >
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