/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator);
