import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class RobotSimulator extends React.Component<{}> {

  render() {
    const {robot} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <Text>Welcome to React Native</Text>
          <Text>Toy Robot Simulator</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default connect(
  ({robot}) => ({robot})
)(RobotSimulator)
