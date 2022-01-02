import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

const Likes = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Likes</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginHorizontal: 10
    }
})

export default Likes;
