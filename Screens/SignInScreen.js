import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

import colors from '../config/colors';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In your account</Text>
      <View style={styles.form}>
        <Input placeholder="Name" style={styles.input} />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: "center" 
  },
  form: {
    marginTop: 30,
  },
  titleText: {
    fontSize: 30,
    marginTop: 15,
    color: colors.text,
  },
  input: {
    color: colors.text
  }
});

export default SignInScreen;
