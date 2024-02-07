import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
const Input = ({placeholder}) => {
  return <TextInput style={style.input} placeholder={placeholder} />;
};

const style = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
export default Input;
