import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
// Image,
Button, Platform, ScrollView, StyleSheet, Text, 
// TouchableOpacity,
View, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { WebBrowser } from 'expo';
import Colors from '../constants/Colors';
// import { MonoText } from '../components/StyledText';
import { getLearnMore } from '../redux/actions';
class HomeScreen extends Component {
    constructor() {
        // private static navigationOptions = {
        //   header: null
        // };
        super(...arguments);
        this._topBarNavigator = () => {
            const leftIconName = Platform.OS === 'ios' ? `ios-camera` : 'md-camera';
            const rightIconName = Platform.OS === 'ios' ? `ios-send` : 'md-send';
            return (React.createElement(View, { style: styles.topBarContainer },
                React.createElement(View, { style: styles.topBarLeftContainer },
                    React.createElement(Ionicons, { name: leftIconName, size: 28, style: { marginBottom: -3 }, color: Colors.iconBlack })),
                React.createElement(View, { style: styles.topBarCenterContainer },
                    React.createElement(Text, null, "Center")),
                React.createElement(View, { style: styles.topBarRightContainer },
                    React.createElement(Ionicons, { name: rightIconName, size: 28, style: { marginBottom: -3 }, color: Colors.iconBlack }))));
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            this._topBarNavigator(),
            React.createElement(ScrollView, { style: styles.container, contentContainerStyle: styles.contentContainer },
                React.createElement(Button, { onPress: this.props.actions.getLearnMore, title: "Pressthe button", color: "#841584", accessibilityLabel: "Learn more about this purple button" }),
                React.createElement(Text, null, this.props.learnMore))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30
    },
    topBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topBarLeftContainer: {},
    topBarCenterContainer: {},
    topBarRightContainer: {},
});
// Define which part of the state we're passing to this component
const mapStateToProps = state => ({
    learnMore: state.learnMore
});
// Define the actions this component may dispatch
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getLearnMore
    }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
//# sourceMappingURL=HomeScreen.js.map