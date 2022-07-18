export enum RSP_VALUES {
  ROCK = 'ROCK',
  SCISSORS = 'SCISSORS',
  PAPER = 'PAPER',
}

export const RSP_VALUES_IMAGES_MAP = new Map<string, string>([
  [RSP_VALUES.ROCK, 'rsp-rock.svg'],
  [RSP_VALUES.SCISSORS, 'rsp-scissors.svg'],
  [RSP_VALUES.PAPER, 'rsp-paper.svg'],
]);

export interface GameModel {
  username: string;
  win: number;
  lost: number;
}
