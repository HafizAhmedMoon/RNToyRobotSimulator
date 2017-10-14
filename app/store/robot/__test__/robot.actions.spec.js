import React from 'react';
import 'react-native';
import { robotInvalid, robotLeft, robotMove, robotPlace, robotReport, robotRight } from '../robot.actions';
import { ROBOT_INVALID, ROBOT_LEFT, ROBOT_MOVE, ROBOT_PLACE, ROBOT_REPORT, ROBOT_RIGHT } from "../robot.constants";

describe('Robot Actions', () => {

  it('robotPlace should create ROBOT_PLACE action with args', () => {
    expect(robotPlace(['0', '0', 'NORTH'])).toEqual({
      type: ROBOT_PLACE,
      payload: {
        x: 0,
        y: 0,
        direction: 'NORTH'
      }
    });
  });

  it('robotPlace should create ROBOT_PLACE action with no args', () => {
    expect(robotPlace()).toEqual({
      type: ROBOT_PLACE,
      payload: {
        x: -1,
        y: -1,
        direction: ''
      }
    });
  });

  it('robotPlace should create ROBOT_PLACE action with empty args', () => {
    expect(robotPlace([])).toEqual({
      type: ROBOT_PLACE,
      payload: {
        x: -1,
        y: -1,
        direction: ''
      }
    });
  });

  it('robotLeft should create ROBOT_LEFT action', () => {
    expect(robotLeft()).toEqual({
      type: ROBOT_LEFT
    });
  });

  it('robotRight should create ROBOT_RIGHT action', () => {
    expect(robotRight()).toEqual({
      type: ROBOT_RIGHT
    });
  });

  it('robotMove should create ROBOT_MOVE action', () => {
    expect(robotMove()).toEqual({
      type: ROBOT_MOVE
    });
  });

  it('robotReport should create ROBOT_REPORT action', () => {
    expect(robotReport()).toEqual({
      type: ROBOT_REPORT
    });
  });

  it('robotInvalid should create ROBOT_INVALID action', () => {
    expect(robotInvalid()).toEqual({
      type: ROBOT_INVALID
    });
  });

});
