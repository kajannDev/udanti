import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default class LikesScreen extends Component {
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
//# sourceMappingURL=LikesScreen.js.map