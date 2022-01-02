import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommentScreen from '../Screens/CommentScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import UserProfileScreen from '../Screens/UserProfileScreen';
import PostDetail from '../Screens/PostDetail';

const PostStackNav = createNativeStackNavigator();

const PostStack = () => {
  const navigation = useNavigation();

  return (
    <PostStackNav.Navigator>
      <PostStackNav.Screen
        component={CommentScreen}
        name="Comments"
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={25} />
            </Pressable>
          ),
        }}
      />
      <PostStackNav.Screen
        component={UserProfileScreen}
        name="UserProfile"
        options={({route}) => ({
          title: route.params.name,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={25} />
            </Pressable>
          ),
        })}
      />
      <PostStackNav.Screen
        component={PostDetail}
        name="PostDetail"
        options={({route}) => ({
          title: route.params.name,
          headerLeft: () => (
            <Pressable
              onPress={() =>
                navigation.goBack()
              }>
              <Ionicons name="chevron-back-outline" size={25} />
            </Pressable>
          ),
        })}
      />
    </PostStackNav.Navigator>
  );
};

export default PostStack;
