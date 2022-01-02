import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import Comment from '../components/Comment';
import CommentBox from '../components/CommentBox';

const CommentScreen = () => {
  const renderItem = () => (
    <View>
      <Comment name="aysetoputut" text="Manzara çok iyi" avatar likes />
      <Comment name="aliatabak" text="Neredesin" avatar likes />
      <Comment name="ahmetalkan" text="Efsane" avatar likes />
    </View>
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
      style={styles.container}
      enabled>
      <View style={styles.inner}>
        <View>
          {/* Current user COMMENT */}
          <Comment name="umutcansidar" text="Tatil :)" avatar borderBottom />
          <ScrollView>{renderItem()}</ScrollView>
          {/* Current user COMMENT */}
        </View>
      </View>
      <View style={styles.commentBoxLabel}>
        <CommentBox />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  commentBoxLabel: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inner: {
    flex: 1,
  },
});

export default CommentScreen;
