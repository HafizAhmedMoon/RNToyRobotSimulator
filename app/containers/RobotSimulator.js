import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { CommandInput } from "../components/CommandInput";
import { CommandOutput } from "../components/CommandOutput";
import { robotInvalid, robotLeft, robotMove, robotPlace, robotReport, robotRight } from "../store/robot/robot.actions";
import { mapDispatchToProps } from "../utils";
import { Command } from "../model/Command";

class RobotSimulator extends React.Component<{}> {

  onCommandReceive(command) {
    const {robotPlace, robotLeft, robotRight, robotMove, robotReport, robotInvalid} = this.props;
    const mapActions = {
      [Command.COMMAND_DICT.PLACE]: robotPlace,
      [Command.COMMAND_DICT.LEFT]: robotLeft,
      [Command.COMMAND_DICT.RIGHT]: robotRight,
      [Command.COMMAND_DICT.MOVE]: robotMove,
      [Command.COMMAND_DICT.REPORT]: robotReport,
    };
    if (command.isInvalid) {
      robotInvalid();
      return;
    }
    const action = mapActions[command.command];
    action(command.args);
  }

  render() {
    const {robot} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <Text>Welcome to React Native</Text>
          <Text>Toy Robot Simulator</Text>
        </Text>
        <CommandInput onCommandReceive={this.onCommandReceive.bind(this)}/>
        <CommandOutput output={robot.output}/>
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
  ({robot}) => ({robot}),
  mapDispatchToProps({robotPlace, robotLeft, robotRight, robotMove, robotReport, robotInvalid})
)(RobotSimulator)
