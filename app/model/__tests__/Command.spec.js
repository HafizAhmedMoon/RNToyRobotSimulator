import { Command } from "../Command";

describe("Command model", () => {
  it('should handle invalid command', () => {
    const cmd = Command.parse('JUMP');

    expect(cmd).toBeInstanceOf(Command);
    expect(cmd.command).toBe('JUMP');
    expect(cmd.args).toHaveLength(0);
    expect(cmd.args).toEqual([]);
    expect(cmd.isInvalid).toBe(true);
  });

  it('should parse command correctly', () => {
    const cmd = Command.parse('PLACE 0 0 NORTH');

    expect(cmd).toBeInstanceOf(Command);
    expect(cmd.command).toBe('PLACE');
    expect(cmd.args).toHaveLength(3);
    expect(cmd.args).toEqual(['0', '0', 'NORTH']);
  });
});
