import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export class CommandOutput extends React.Component {

  static propTypes = {
    output: PropTypes.string.isRequired
  };

  render() {
    const {output} = this.props;
    return (
      <View style={styles.container}>
        <Text>{output}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingHorizontal: 10
  },
});
