import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-elements';

import ProfileBTN from '../components/ProfileBTN';
import TabContent from '../components/TabContent';

import fontsizes from '../config/fontsizes';

const {width, height} = Dimensions.get('screen');

const UserProfileScreen = ({route, userInfo}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: height * 2}}>
        <View style={styles.container}>
          <View>
            <Avatar
              rounded
              size={'large'}
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.profileInfo.label}>
              <View style={styles.profileInfo.text}>
                <Text style={styles.profileInfo.title}>15,3B</Text>
              </View>
              <View style={styles.profileInfo.text}>
                <Text style={styles.profileInfo.subtitle}>Posts</Text>
              </View>
            </View>
            <View style={styles.profileInfo.label}>
              <View style={styles.profileInfo.text}>
                <Text style={styles.profileInfo.title}>15,3B</Text>
              </View>
              <View style={styles.profileInfo.text}>
                <Text style={styles.profileInfo.subtitle}>Followers</Text>
              </View>
            </View>
            <View style={styles.profileInfo.label}>
              <View style={styles.profileInfo.text}>
                <Text style={styles.profileInfo.title}>15,3B</Text>
              </View>
              <View style={styles.profileInfo.text}>
                <Text style={styles.profileInfo.subtitle}>Follow</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text>{route ? route.params.name : userInfo.name }</Text>
            <Text>{route ? route.params.explain : userInfo.explain}</Text>
          </View>
        </View>
        <ProfileBTN styles={styles.container} title={'Profili Düzenle'} />
        {/* TAB */}
        <TabContent name={route ? route.params.name : userInfo.name} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: width / 5,
    label: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,
    },
    text: {
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: fontsizes.comment,
    },
    subtitle: {
      fontWeight: '300',
      fontSize: fontsizes.comment,
    },
  },
});

export default UserProfileScreen;
