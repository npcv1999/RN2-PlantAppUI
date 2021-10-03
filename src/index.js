import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
//stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PlantDetail} from './screens';
import Tabs from './navigation/Tab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        {/* Tab */}
        <Stack.Screen name="Home" component={Tabs}></Stack.Screen>
        {/* Stack */}
        <Stack.Screen name="Detail" component={PlantDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
