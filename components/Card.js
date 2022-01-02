import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Pressable, Dimensions} from 'react-native';

import {Avatar, Image} from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Likes from './Likes';
import Comment from './Comment';
import ModalBottomSheet from './ModalBottomSheet';

const Card = ({name, id, uri, route}) => {
  const [like, setLike] = useState(false);
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <View
        style={[
          styles.container,
          isVisible && {zIndex: 11, position: 'relative'},
        ]}>
        <View style={styles.header}>
          <Pressable
            style={{flex: 1}}
            onPress={() =>
              navigation.navigate('PostStack', {
                screen: 'UserProfile',
                params: {name: name},
              })
            }>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar
                rounded
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
              <View style={styles.headerTextLabel}>
                <Text>{name}</Text>
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setIsVisible(true)}>
            <Text>...</Text>
          </Pressable>
        </View>
        <View style={styles.article}>
          <Image
            source={{uri: uri ? uri : 'https://dummyimage.com/300'}}
            style={styles.image}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.userAction}>
            <Pressable onPress={() => setLike(isLiked => !isLiked)}>
              <Ionicon
                name={like ? 'heart' : 'heart-outline'}
                color="#060606"
                size={25}
                style={styles.icon}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.push('PostStack', {screen: 'Comments'})
              }>
              <Ionicon
                name="chatbubbles-outline"
                color="#060606"
                size={25}
                style={styles.icon}
              />
            </Pressable>
            <Ionicon
              name="paper-plane-outline"
              color="#060606"
              size={25}
              style={styles.icon}
            />
          </View>
          <View style={styles.rightIcon}>
            <Ionicon name="bookmark-outline" color="#060606" size={25} />
          </View>
        </View>
        <Likes />
        <Comment name={name} text="Tatil :)" avatar="false" likes="false" />
      </View>
      <ModalBottomSheet
        isVisible={isVisible}
        setVisible={setIsVisible}
        pk={id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTextLabel: {
    flex: 1,
    marginLeft: 10,
  },
  article: {},
  image: {
    width: '100%',
    height: 300,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  userAction: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  rightIcon: {
    marginRight: 10,
  },
  explain: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  text: {
    marginRight: 5,
  },
});

export default Card;
