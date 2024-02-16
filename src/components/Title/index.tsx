import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Title = ({text, text2}) => {
  return (
    <View>
      <Text style={style.title}>{text}</Text>
      <Text style={style.title2}>{text2}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  title: {
    color: 'black',
    marginHorizontal: 10,
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  title2: {
    color: 'black',
    marginHorizontal: 10,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

export default Title;
