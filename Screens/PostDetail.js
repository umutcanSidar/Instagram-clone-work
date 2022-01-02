import React from 'react';
import {View, Text} from 'react-native';
import Card from '../components/Card';

const PostDetail = ({route}) => {
  return (
    <>
      <View>
        <Card name={route.params.name} id={route.params.id} uri={route.params.uri} />
      </View>
    </>
  );
};

export default PostDetail;
