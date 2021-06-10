import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './pages/Home'
import Results from './pages/Results'
import About from './pages/About'

const Tabs = createBottomTabNavigator();

export default function Routes() {
  return(
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#fff',
        activeTintColor: '#114B5F',
        inactiveTintColor: '#999',
        labelStyle: {
          fontSize: 12,
        }
      }}
    >
      <Tabs.Screen  
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={ focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tabs.Screen  
        name='Results'
        component={Results}
        options={{
          title: 'Resultados',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={ focused ? 'list' : 'list-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tabs.Screen  
        name='About'
        component={About}
        options={{
          title: 'Sobre',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={ focused ? 'help-circle' : 'help-circle-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
    </Tabs.Navigator>
  )
}