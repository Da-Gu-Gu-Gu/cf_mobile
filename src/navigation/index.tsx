import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CrushList from '../screens/CrushList';
import Messenger from '../screens/Messenger';
import Noti from '../screens/Noti';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home Screen" component={Home} />
      <Tab.Screen name="Crush List Screen" component={CrushList} />
      <Tab.Screen name="Messenger" component={Messenger} />
    </Tab.Navigator>
  );
};

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Crushlist" component={TabNavigator} />
        <Stack.Screen name="Messenger" component={TabNavigator} />
        <Stack.Screen name="Noti" component={Noti} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
