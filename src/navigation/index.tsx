import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CrushList from '../screens/CrushList';
import Messenger from '../screens/Messenger';
import Noti from '../screens/Noti';
import {StackParams} from './types/router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,tabBarShowLabel:false,tabBarStyle:{
      height:60
    }}}>
      <Tab.Screen name="Home Screen" component={Home} 
        options={{
          tabBarIcon:({color,size})=>{
            return <Icon name='home-outline' size={30} color={color} />
          }
        }}
      />
      <Tab.Screen name="Crush List Screen" component={CrushList} 
             options={{
              tabBarIcon:({color,size})=>{
                return <Icon name='heart-half-outline' size={30} color={color} />
              }
            }}
      
      />
      <Tab.Screen name="Match Screen" component={Messenger} 
            options={{
              tabBarIcon:({color,size})=>{
                return <Icon name='heart-outline' size={30} color={color}/>
              }
            }}/>
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
