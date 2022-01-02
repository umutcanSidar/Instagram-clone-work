import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBottomStack from './TabBottomStack';
import PostStack from './PostStack';

import SignInScreen from '../Screens/SignInScreen';
import UserProfileScreen from '../Screens/UserProfileScreen';
import { Pressable } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const MainStackNav = createNativeStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStackNav.Screen component={TabBottomStack} name="TabBottomStack" />
      <MainStackNav.Screen component={PostStack} name="PostStack" headerShown={false} />

      <MainStackNav.Screen
        name="SignIn"
        component={SignInScreen}
        options={{presentation: 'fullScreenModal'}}
      />
    </MainStackNav.Navigator>
  );
};

export default MainStack;
