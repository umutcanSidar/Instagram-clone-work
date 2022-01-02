import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import UserProfileScreen from './UserProfileScreen';

const ProfileScreen = () => {

  return (
    <>
      <Header
        leftComponent={{text: 'Name', color: '#fff'}}
        rightComponent={{icon: 'menu', color: '#fff', type: 'ionicon'}}
        centerContainerStyle={{flex: 1}}
        backgroundColor=""
      />
      <View style={styles.container}>
        <UserProfileScreen userInfo={{name: "umutcansidar", explain: ""}}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
    
  }
});

export default ProfileScreen;
