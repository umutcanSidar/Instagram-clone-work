import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileBTN = ({title, styles}) => {
  return (
    <View style={[styles, {flexDirection: 'row'}]}>
      <View style={{flex: 1}}>
        <Button
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#000',
            height: 40,
          }}
          titleStyle={{color: '#000', fontSize: fontsizes.btn}}
          title={title}
        />
      </View>

      {/* <View>
        <Button
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#000',
            width: 40,
            marginLeft: 10,
            height: 40,
          }}
          icon={() => <Ionicons name="chevron-down-outline" size={16} />}
          titleStyle={{color: '#000', fontSize: fontsizes.btn}}
        />
      </View> */}
    </View>
  );
};

export default ProfileBTN;
