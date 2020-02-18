import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends React.Component{
  state = {
    currentScreen: "Landing",
  }

  switchScreen = (currentScreen) => {
    this.setState({currentScreen});
  }

  renderScreen = () => {
    if(this.state.currentScreen === "Landing"){
      return (
        <Landing switchScreen={this.switchScreen}/>
      ) 
    }else if(this.state.currentScreen === "Search"){
      return (
        <Search/>
      )
    }
  }

  render(){
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
