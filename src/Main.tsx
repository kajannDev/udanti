import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { RootNavigation } from './navigation/RootNavigation';

interface IProps {
  skipLoadingScreen?: boolean;
}

interface IState {
  isLoadingComplete: boolean;
}

export default class Main extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this._handleFinishLoading = this._handleFinishLoading.bind(this);
    this.state = {
      isLoadingComplete: false
    };
  }

  public render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourceAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  public async _loadResourceAsync() {
    // let ion: Ionicons = new Ionicons(this.props);
    return Asset.loadAsync([
      // require('../../assets/images/robot-dev.png'),
      // require('../../assets/images/robot-prod.png')
    ]).then(
      () => Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.loadFont,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // 'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf')
      })
    );
  }

  public async _handleLoadingError(error: any) {
    console.warn(error);
  }

  public async _handleFinishLoading() {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
});
