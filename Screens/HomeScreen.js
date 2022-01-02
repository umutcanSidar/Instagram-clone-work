import React from 'react';
import {View, ScrollView} from 'react-native';

import {Header} from 'react-native-elements';
import Card from '../components/Card';

const data = [
  {id: 1, name: 'umutcansidar'},
  {id: 2, name: 'aliatabak'},
];
const HomeScreen = () => {
  return (
    <View>
      <Header
        leftComponent={{text: 'Instagram', style: {color: '#000'}}}
        rightComponent={{icon: 'add', color: '#fff', type: 'ionicon'}}
      />
      <ScrollView>
        {data.map(e => (
          <Card name={e.name} key={e.id} id={e.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
