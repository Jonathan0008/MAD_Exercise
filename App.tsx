import React, { useState } from 'react';
import Input from './src/components/Input';
import Title from './src/components/Title';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const App = () => {
  const [setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <Title text="Welcome" text2={undefined} />
        <Title text2="UserName" text={undefined} />
        <Input placeholder="masukan userName anda" />
        <Title text2="PassWord" text={undefined} />
        <Input placeholder="masukan passWord anda" />
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>sign in</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderWidth: 1,
    margin: 50,
    padding: 13,
    borderRadius: 20,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
