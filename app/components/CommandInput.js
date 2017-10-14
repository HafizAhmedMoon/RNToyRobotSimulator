import PropTypes from 'prop-types';
import React from 'react';
import { Command } from "../model/Command";
import { StyleSheet, TextInput, View } from "react-native";

export class CommandInput extends React.Component {

  static propTypes = {
    onCommandReceive: PropTypes.func.isRequired
  };

  state = {
    command: ''
  };

  onSubmit() {
    const {onCommandReceive} = this.props;
    const {command} = this.state;
    onCommandReceive(Command.parse(command));

    this.setState({command: ''});
    this.refs.commandInput.clear();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="commandInput"
          onSubmitEditing={this.onSubmit.bind(this)}
          placeholder="Input Command"
          keyboardType="default"
          returnKeyType="done"
          style={styles.input}
          onChangeText={command => this.setState({command})}
          disableFullscreenUI={true}

          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingHorizontal: 10
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingBottom: 0
  }
});
