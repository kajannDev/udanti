import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
export default class LinksScreen extends Component {
    // private static navigationOptions = {
    //   title: 'Links'
    // };
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "Links here")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff'
    }
});
//# sourceMappingURL=LinksScreen.js.map