import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';

import { Feather, AntDesign } from '@expo/vector-icons';

import { Search } from '../screens/Search';
import { Purchase } from '../screens/Purchase';
import { Contats } from '../screens/Contats';

export function TabRoutes() {
  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00856F',
        tabBarInactiveTintColor: '#384633',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 79,
          backgroundColor: "#92B9BD"
        },
        headerShown: false
      }}
    >
      <Screen name='HomeTab' component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          )
        }}
      />

      <Screen name='Search' component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='search' color={color} size={size} />
          )
        }}
      />

      <Screen name='Purchase' component={Purchase}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='shoppingcart' color={color} size={size} />
          )
        }}
      />

      <Screen name='Contacts' component={Contats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='contacts' color={color} size={size} />
          )
        }}
      />
    </Navigator>
  )
}