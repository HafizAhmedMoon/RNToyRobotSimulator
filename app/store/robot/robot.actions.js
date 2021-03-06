import { ROBOT_INVALID, ROBOT_LEFT, ROBOT_MOVE, ROBOT_PLACE, ROBOT_REPORT, ROBOT_RIGHT } from "./robot.constants";

export function robotPlace([x = -1, y = -1, direction = ''] = [-1, -1, '']) {
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  return {
    type: ROBOT_PLACE,
    payload: {x, y, direction}
  }
}

export function robotLeft() {
  return {
    type: ROBOT_LEFT
  }
}

export function robotRight() {
  return {
    type: ROBOT_RIGHT
  }
}

export function robotMove() {
  return {
    type: ROBOT_MOVE
  }
}

export function robotReport() {
  return {
    type: ROBOT_REPORT
  }
}

export function robotInvalid() {
  return {
    type: ROBOT_INVALID
  }
}
