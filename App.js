import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LotsOfGreetings from './components/list';
import BlinkApp from './components/blink';
import LotsOfStyles from './components/styles';
import FixedDimensionsBasics from './components/fixedDimensions';
import FlexDimensionsBasics from './components/flexDimensions';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container}>
        <FlexDimensionsBasics />
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
