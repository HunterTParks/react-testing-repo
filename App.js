import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LotsOfGreetings from './components/list'

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <LotsOfGreetings />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
