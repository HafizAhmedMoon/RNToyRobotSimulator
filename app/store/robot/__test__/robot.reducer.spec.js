import React from 'react';
import 'react-native';
import robot, { initialState } from '../robot.reducer';
import {
  ROBOT_DIRECTION,
  ROBOT_INVALID,
  ROBOT_LEFT,
  ROBOT_MOVE,
  ROBOT_MSG_COMMAND_INVALID,
  ROBOT_MSG_INVALID_DIRECTION,
  ROBOT_MSG_INVALID_POSITION,
  ROBOT_MSG_MOVE,
  ROBOT_MSG_MOVE_IGNORE,
  ROBOT_MSG_NOT_PLACED,
  ROBOT_MSG_PLACED,
  ROBOT_MSG_TURN_LEFT,
  ROBOT_MSG_TURN_RIGHT,
  ROBOT_PLACE,
  ROBOT_REPORT,
  ROBOT_RIGHT
} from '../robot.constants';

describe('Robot Reducer', () => {

  it('should provide initial state', () => {
    expect(robot(undefined, {})).toEqual(initialState);
  });

  describe('ROBOT_PLACE Action', () => {

    it('should handle with correct args', () => {
      expect(robot(initialState, {
        type: ROBOT_PLACE,
        payload: {
          x: 0,
          y: 0,
          direction: ROBOT_DIRECTION.NORTH
        }
      })).toEqual({
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
        direction: ROBOT_DIRECTION.NORTH,
        output: ROBOT_MSG_PLACED
      });
    });

    it('should handle with wrong position', () => {
      expect(robot(initialState, {
        type: ROBOT_PLACE,
        payload: {
          x: -1,
          y: 7,
          direction: ROBOT_DIRECTION.NORTH
        }
      })).toEqual({
        ...initialState,
        output: ROBOT_MSG_INVALID_POSITION
      });
    });

    it('should handle with wrong direction', () => {
      expect(robot(initialState, {
        type: ROBOT_PLACE,
        payload: {
          x: 0,
          y: 0,
          direction: ''
        }
      })).toEqual({
        ...initialState,
        output: ROBOT_MSG_INVALID_DIRECTION
      });
    });

    it('should handle with empty args', () => {
      expect(robot(initialState, {
        type: ROBOT_PLACE,
        payload: {}
      })).toEqual({
        ...initialState,
        output: ROBOT_MSG_INVALID_POSITION
      });
    });

  });

  describe('ROBOT_LEFT Action', () => {

    it('should handle without placing a robot', () => {
      expect(robot(initialState, {
        type: ROBOT_LEFT
      })).toEqual({
        ...initialState,
        output: ROBOT_MSG_NOT_PLACED
      });
    });

    it('should change direction NORTH to WEST', () => {
      const state = {
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
        direction: ROBOT_DIRECTION.NORTH
      };

      expect(robot(state, {
        type: ROBOT_LEFT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.WEST,
        output: ROBOT_MSG_TURN_LEFT
      });
    });

    it('should change direction Anti-clock wise', () => {
      let state = {
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
      };

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.NORTH
      }, {
        type: ROBOT_LEFT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.WEST,
        output: ROBOT_MSG_TURN_LEFT
      });

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.WEST
      }, {
        type: ROBOT_LEFT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.SOUTH,
        output: ROBOT_MSG_TURN_LEFT
      });

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.SOUTH
      }, {
        type: ROBOT_LEFT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.EAST,
        output: ROBOT_MSG_TURN_LEFT
      });

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.EAST
      }, {
        type: ROBOT_LEFT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.NORTH,
        output: ROBOT_MSG_TURN_LEFT
      });
    });

  });

  describe('ROBOT_RIGHT Action', () => {

    it('should handle without placing a robot', () => {
      expect(robot(initialState, {
        type: ROBOT_RIGHT
      })).toEqual({
        ...initialState,
        output: ROBOT_MSG_NOT_PLACED
      });
    });

    it('should change direction NORTH to EAST', () => {
      const state = {
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
        direction: ROBOT_DIRECTION.NORTH
      };

      expect(robot(state, {
        type: ROBOT_RIGHT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.EAST,
        output: ROBOT_MSG_TURN_RIGHT
      });
    });

    it('should change direction Clock wise', () => {
      let state = {
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
      };

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.NORTH
      }, {
        type: ROBOT_RIGHT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.EAST,
        output: ROBOT_MSG_TURN_RIGHT
      });

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.EAST
      }, {
        type: ROBOT_RIGHT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.SOUTH,
        output: ROBOT_MSG_TURN_RIGHT
      });

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.SOUTH
      }, {
        type: ROBOT_RIGHT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.WEST,
        output: ROBOT_MSG_TURN_RIGHT
      });

      expect(robot({
        ...state,
        direction: ROBOT_DIRECTION.WEST
      }, {
        type: ROBOT_RIGHT
      })).toEqual({
        ...state,
        direction: ROBOT_DIRECTION.NORTH,
        output: ROBOT_MSG_TURN_RIGHT
      });
    });

  });

  describe('ROBOT_MOVE Action', () => {

    it('should handle without placing a robot', () => {
      expect(robot(initialState, {
        type: ROBOT_MOVE
      })).toEqual({
        ...initialState,
        output: ROBOT_MSG_NOT_PLACED
      });
    });

    it('should move to NORTH', () => {
      const state = {
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
        direction: ROBOT_DIRECTION.NORTH
      };

      expect(robot(state, {
        type: ROBOT_MOVE
      })).toEqual({
        ...state,
        x: 1,
        output: ROBOT_MSG_MOVE
      });
    });

    it('should move to EAST', () => {
      const state = {
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
        direction: ROBOT_DIRECTION.EAST
      };

      expect(robot(state, {
        type: ROBOT_MOVE
      })).toEqual({
        ...state,
        y: 1,
        output: ROBOT_MSG_MOVE
      });
    });

    it('should ignore move', () => {
      const state = {
        ...initialState,
        isPlaced: true,
        x: 0,
        y: 0,
        direction: ROBOT_DIRECTION.WEST
      };

      expect(robot(state, {
        type: ROBOT_MOVE
      })).toEqual({
        ...state,
        y: 0,
        output: ROBOT_MSG_MOVE_IGNORE
      });
    });

  });

  describe('ROBOT_REPORT', () => {

    it('should handle without placing a robot', () => {
      expect(robot(initialState, {
        type: ROBOT_REPORT
      })).toEqual({
        ...initialState,
        output: ROBOT_MSG_NOT_PLACED
      });
    });

    it('should report the position', () => {
      const state = {
        ...initialState,
        isPlaced: true,
        x: 3,
        y: 4,
        direction: ROBOT_DIRECTION.NORTH
      };
      expect(robot(state, {
        type: ROBOT_REPORT
      })).toEqual({
        ...state,
        output: 'Robot position at 3 rows, 4 cols and facing NORTH direction'
      })
    });

  });

  it('should handle ROBOT_INVALID action', () => {
    expect(robot(initialState, {
      type: ROBOT_INVALID
    })).toEqual({
      ...initialState,
      output: ROBOT_MSG_COMMAND_INVALID
    })
  });

});
