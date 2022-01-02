import React, {useState} from 'react';

import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Avatar} from 'react-native-elements';
import fontsizes from '../config/fontsizes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackActions, useNavigation} from '@react-navigation/native';

const Comment = ({borderBottom, avatar, likes, text, name}) => {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);

  return (
    <View
      style={[
        styles.comment,
        borderBottom && {borderBottomWidth: 1, borderBottomColor: '#e1e1e1'},
      ]}>
      {avatar === true && (
        <Avatar
          rounded
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
      )}
      <View style={styles.commentTextLabel}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Pressable
                onPress={() =>
                  navigation.push('PostStack', {
                    screen: 'UserProfile',
                    params: {name: name},
                  })
                }>
                <Text style={styles.commentName}>{name}</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                onPress={() =>
                  navigation.push('PostStack', {
                    screen: 'Comments',
                    params: {name: name},
                  })
                }>
                <Text style={styles.commentText}>{text}</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.commentTime}>21 d</Text>
        </View>
        {likes === true && (
          <Pressable onPress={() => setLike(isLiked => !isLiked)}>
            <Ionicons name={like ? 'heart' : 'heart-outline'} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    paddingBottom: 10,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  commentTextLabel: {
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentName: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: fontsizes.comment,
    textTransform: 'lowercase',
  },
  commentText: {
    fontSize: fontsizes.comment,
  },
  commentTime: {
    fontSize: fontsizes.commentTime,
    marginTop: 8,
  },
});

export default Comment;
