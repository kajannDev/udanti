var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { RootNavigation } from './navigation/RootNavigation';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this._handleFinishLoading = this._handleFinishLoading.bind(this);
        this.state = {
            isLoadingComplete: false
        };
    }
    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (React.createElement(AppLoading, { startAsync: this._loadResourceAsync, onError: this._handleLoadingError, onFinish: this._handleFinishLoading }));
        }
        else {
            return (React.createElement(View, { style: styles.container },
                Platform.OS === 'ios' && React.createElement(StatusBar, { barStyle: 'default' }),
                Platform.OS === 'android' && React.createElement(View, { style: styles.statusBarUnderlay }),
                React.createElement(RootNavigation, null)));
        }
    }
    _loadResourceAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            // let ion: Ionicons = new Ionicons(this.props);
            return Asset.loadAsync([
            // require('../../assets/images/robot-dev.png'),
            // require('../../assets/images/robot-prod.png')
            ]).then(() => Font.loadAsync(Object.assign({}, Ionicons.loadFont)));
        });
    }
    _handleLoadingError(error) {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn(error);
        });
    }
    _handleFinishLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({ isLoadingComplete: true });
        });
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
//# sourceMappingURL=Main.js.map