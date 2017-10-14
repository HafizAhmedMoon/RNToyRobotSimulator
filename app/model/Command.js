export class Command {

  static COMMAND_DICT = {
    PLACE: 'PLACE',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    MOVE: 'MOVE',
    REPORT: 'REPORT',
  };

  static parse(command) {
    const [cmd, ...args] = command.trim().split(' ');
    return new Command(cmd, args);
  }

  command = '';
  args = [];

  constructor(command, args) {
    this.command = command;
    this.args = args;
  }

  get isInvalid() {
    return !Command.COMMAND_DICT[this.command]
  }
}
