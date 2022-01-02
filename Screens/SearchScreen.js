import React from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';

const SearchScreen = () => {
  return (
    <>
      <Header
        centerComponent={{icon: 'search', color: '#fff', type: 'ionicon'}}
        centerContainerStyle={{flex: 1}}
        backgroundColor=""
      />
    </>
  );
};

export default SearchScreen;
