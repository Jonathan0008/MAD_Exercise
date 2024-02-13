import React from 'react';
import Input from './src/components/Input';
import Title from './src/components/Title';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <Title text="Basic Components in RN" />
        <Title text="Hallo World" />
        <Title text="Hello juan" />
        <Image
          source={require('./assets/Acer_Wallpaper_03_3840x2400.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./assets/Acer_Wallpaper_03_3840x2400.jpg')}
          style={styles.image}
        />
        <Input placeholder="masukan nama anda" />
        <Input placeholder="masukan passWord anda" />
        <Input placeholder="masukan email" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default App;
