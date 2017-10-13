## React Native: TOY ROBOT SIMULATOR
[![Build Status](https://travis-ci.org/HafizAhmedMoon/RNToyRobotSimulator.svg?branch=master)](https://travis-ci.org/HafizAhmedMoon/RNToyRobotSimulator)
[![Coverage Status](https://coveralls.io/repos/github/HafizAhmedMoon/RNToyRobotSimulator/badge.svg?branch=master)](https://coveralls.io/github/HafizAhmedMoon/RNToyRobotSimulator?branch=master)
### Description:

* The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
* There are no other obstructions on the table surface.
* The robot is free to roam around the surface of the table, but must be prevented from falling to
destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

  > Create an application that can read in commands of the following form -
  >  * PLACE X,Y,F
  >  * MOVE
  >  * LEFT
  >  * RIGHT
  >  * REPORT
* PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
* The origin (0,0) can be considered to be the SOUTH WEST most corner.
* The first valid command to the robot is a PLACE command, after that, any sequence of
commands may be issued, in any order, including another PLACE command. The application
should discard all commands in the sequence until a valid PLACE command has been executed.
* MOVE will move the toy robot one unit forward in the direction it is currently facing.
* LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the
position of the robot.
* REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output
is sufficient.
* A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and REPORT
commands.
* Input can be from a file, or from standard input, as the developer chooses.
* Provide test data to exercise the application.

### Constraints:
* The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
* Any move that would cause the robot to fall must be ignored.

### Commands:
* `npm start` to start packaging server manually
* `npm run androud` to run on android simulator or device
* `npm run android-clean` to clean android build
* `npm run log-android` to view android logs
* `npm run menu` to open menu on android
* `npm run reload` to reload app on android
* `npm run ios` to run on ios simulator or device
* `npm run log-ios` to view ios logs
* `npm run test` to run tests
* `npm run coverage` to run tests with coverage