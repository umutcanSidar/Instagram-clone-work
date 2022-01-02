import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../Screens/ProfileScreen';

import {useNavigation} from '@react-navigation/core';

const BottomStack = createBottomTabNavigator();

const TabBottomStack = () => {
  const [user, setUser] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    if (!user) {
      navigation.navigate('SignIn');
    }
  }, []);

  return (
    <BottomStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}>
      <BottomStack.Screen component={HomeScreen} name="Home" />
      <BottomStack.Screen component={SearchScreen} name="Search" />
      <BottomStack.Screen component={ProfileScreen} name="Profile" />
    </BottomStack.Navigator>
  );
};

export default TabBottomStack;
