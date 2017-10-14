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
} from "./robot.constants";

export const initialState = {
  isPlaced: false,
  x: -1,
  y: -1,
  direction: ROBOT_DIRECTION.NONE,
  rows: 5,
  cols: 5,
  output: ''
};

export default function BuddiesReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ROBOT_PLACE: {
      const {rows, cols} = state;
      const {x, y, direction} = payload;
      if (!validatePosition({x, y}, rows, cols)) {
        return {
          ...state,
          output: ROBOT_MSG_INVALID_POSITION
        }
      } else if (!ROBOT_DIRECTION[direction]) {
        return {
          ...state,
          output: ROBOT_MSG_INVALID_DIRECTION
        }
      } else {
        return {
          ...state,
          isPlaced: true,
          x,
          y,
          direction,
          output: ROBOT_MSG_PLACED
        }
      }
    }
    case ROBOT_LEFT:
      if (!state.isPlaced) {
        return {
          ...state,
          output: ROBOT_MSG_NOT_PLACED
        }
      } else {
        const {direction} = state;
        return {
          ...state,
          direction: getLeftDirection(direction),
          output: ROBOT_MSG_TURN_LEFT
        };
      }
    case ROBOT_RIGHT:
      if (!state.isPlaced) {
        return {
          ...state,
          output: ROBOT_MSG_NOT_PLACED
        }
      } else {
        const {direction} = state;
        return {
          ...state,
          direction: getRightDirection(direction),
          output: ROBOT_MSG_TURN_RIGHT
        };
      }
    case ROBOT_MOVE:
      if (!state.isPlaced) {
        return {
          ...state,
          output: ROBOT_MSG_NOT_PLACED
        }
      } else {
        const {x, y, direction, rows, cols} = state;
        const nextPosition = getNextPositionDirection(x, y, direction);
        if (!validatePosition(nextPosition, rows, cols)) {
          return {
            ...state,
            output: ROBOT_MSG_MOVE_IGNORE
          }
        } else {
          return {
            ...state,
            ...getNextPositionDirection(x, y, direction),
            output: ROBOT_MSG_MOVE
          };
        }
      }
    case ROBOT_REPORT:
      if (!state.isPlaced) {
        return {
          ...state,
          output: ROBOT_MSG_NOT_PLACED
        }
      } else {
        const {x, y, direction} = state;
        return {
          ...state,
          output: `Robot position at ${x} rows, ${y} cols and facing ${direction} direction`
        };
      }
    case ROBOT_INVALID:
      return {
        ...state,
        output: ROBOT_MSG_COMMAND_INVALID
      };
    default:
      return state
  }
}

const DIRECTIONS = [
  ROBOT_DIRECTION.NORTH,
  ROBOT_DIRECTION.EAST,
  ROBOT_DIRECTION.SOUTH,
  ROBOT_DIRECTION.WEST
];

function getLeftDirection(direction) {
  const index = DIRECTIONS.indexOf(direction);
  return DIRECTIONS[index === 0 ? DIRECTIONS.length - 1 : index - 1];
}

function getRightDirection(direction) {
  const index = DIRECTIONS.indexOf(direction);
  return DIRECTIONS[index === DIRECTIONS.length - 1 ? 0 : index + 1];
}

const DIRECTION_MAP = {
  [ROBOT_DIRECTION.NORTH]: {x: 1},
  [ROBOT_DIRECTION.SOUTH]: {x: -1},
  [ROBOT_DIRECTION.EAST]: {y: 1},
  [ROBOT_DIRECTION.WEST]: {y: -1},
};

function getNextPositionDirection(_x, _y, direction) {
  const {x = 0, y = 0} = DIRECTION_MAP[direction];
  return {
    x: _x + x,
    y: _y + y,
  }
}

function validatePosition({x, y}, rows, cols) {
  return (
    x > -1 && x < rows &&
    y > -1 && y < cols
  );
}
