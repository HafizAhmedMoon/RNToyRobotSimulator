import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from "react-native";

export class Board extends React.Component {

  static propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  };

  render() {
    const {rows, cols, x, y} = this.props;
    const matrix = Array.from(new Array(rows), (val, row) => {
      const elms = Array.from(new Array(cols), (val, col) => {
        return <View key={col} style={[styles.col, row === x && col === y && styles.selected]}/>
      });
      return <View key={row} style={styles.row}>{elms}</View>
    }).reverse();
    return (
      <View style={styles.container}>
        {matrix}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#aaa',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    borderColor: '#aaa',
    borderWidth: 1,
    width: 50,
    height: 50,
  },
  selected: {
    backgroundColor: 'blue'
  },

});
