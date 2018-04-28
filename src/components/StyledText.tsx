import React from 'react';
import { Text } from 'react-native';

interface IProps {
  style?: object;
}

export class MonoText extends React.Component<IProps> {
  public render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}