import Expo from 'expo';
import App from './App';
// import React, { Component } from 'react';
// import { View } from 'react-native';

Expo.KeepAwake.activate();

Expo.registerRootComponent(App);