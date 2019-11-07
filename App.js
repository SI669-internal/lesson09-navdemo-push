import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    let message = 'Hello from Home!'
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>Message: {this.props.navigation.getParam('message')} </Text>
        <Button
          title="Go to screen 2"
          color='blue'
          onPress={()=>this.props.navigation.navigate('Screen2', {message: message})}/>
        <Button
          title="Go to screen 3"
          color='blue'
          onPress={()=>this.props.navigation.navigate('Screen3', {message: message})}/>
        <Button
          title="Go Back"
          color='blue'
          onPress={()=>this.props.navigation.goBack()}/>
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  render() {
    let message = 'Hello from SecondScreen';
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
        <Text>Message: {this.props.navigation.getParam('message')} </Text>
        <Button
          title="Go Home"
          color='blue'
          onPress={()=>this.props.navigation.navigate('Home', {message: message})}/>
        <Button
          title="Go to screen 3"
          color='blue'
          onPress={()=>this.props.navigation.navigate('Screen3', {message: message})}/>
        <Button
          title="Go Back"
          color='blue'
          onPress={()=>this.props.navigation.goBack()}/>
      </View>
    );
  }
}

class ThirdScreen extends React.Component {
  render() {
    let message = 'Hello from ThirdScreen';
    return (
      <View style={styles.container}>
        <Text>Third Screen</Text>
        <Text>Message: {this.props.navigation.getParam('message')} </Text>
        <Button
          title="Go Home"
          color='blue'
          onPress={()=>this.props.navigation.navigate('Home', {message: message})}/>
        <Button
          title="Go to screen 2"
          color='blue'
          onPress={()=>this.props.navigation.navigate('Screen2', {message: message})}/>
        <Button
          title="Go Back"
          color='blue'
          onPress={()=>this.props.navigation.goBack()}/>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen2: SecondScreen,
    Screen3: ThirdScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
