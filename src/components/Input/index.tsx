import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder}) => {
  return <TextInput placeholder={placeholder} style={style.inputNama} />;
};

const style = StyleSheet.create({
  inputNama: {
    borderWidth: 2,
    margin: 5,
    padding: 15,
    borderRadius: 20,
  },
});

export default Input;
