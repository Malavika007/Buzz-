import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';

import fb from './screens/fb';
import ins from './screens/ins';


export default class App extends React.Component   {
  render(){
  return <AppContainer/>
    
 
  }
}

const TabNavigator = createBottomTabNavigator({
  facebook:{screen:fb},
  instagram:{screen:ins}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
