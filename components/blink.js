import React, { Component } from 'react';

class Blink extends Component {
  constuctor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle these methods every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.state : ' ';
    return(
      <Text>{display}</Text>
    )
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I Love to blink' />
        <Blink text='This is a blinking message' />
        <Blink text='Here is a blinkin message' />
      </View>
    )
  }
}
