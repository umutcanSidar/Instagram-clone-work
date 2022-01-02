import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

import {Avatar} from 'react-native-elements';

const CommentBox = () => {
  const [val, setVal] = useState('');
  
  const addComment = () => {
    // TODO: add comment firebase
  };

  return (
    <View style={styles.container}>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
      </View>
      <View style={styles.text}>
        <View>
          <TextInput onChangeText={e => setVal(e)} autoFocus keyboardType />
        </View>
        <View>
          <Pressable onPress={() => alert(val)}>
            <Text>Paylaş</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  text: {
    marginLeft: 10,
    borderWidth: 1,
    flex: 1,
    borderColor: '#e1e1e1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
});

export default CommentBox;
