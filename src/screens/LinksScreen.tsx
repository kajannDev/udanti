import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends Component {
  // private static navigationOptions = {
  //   title: 'Links'
  // };

  public render() {
    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
        <Text>Links here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});