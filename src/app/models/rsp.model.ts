export enum RSPGAME_VALUES {
  ROCK = 'ROCK',
  SCISSORS = 'SCISSORS',
  PAPER = 'PAPER',
}

export const RSP_VALUES_IMAGES_MAP = new Map<string, string>([
  [RSPGAME_VALUES.ROCK, 'rsp-rock.svg'],
  [RSPGAME_VALUES.SCISSORS, 'rsp-scissors.svg'],
  [RSPGAME_VALUES.PAPER, 'rsp-paper.svg'],
]);

export interface GameModel {
  username: string;
  userWins: number;
  computerWins: number;
  lastPlayUser: RSPGAME_VALUES;
  lastPlayComputer: RSPGAME_VALUES;
}

export enum RSPGAME_RESULT_OPTIONS {
  TIE = 'TIE',
  USER_WIN = 'USER_WIN',
  COMPUTER_WIN = 'COMPUTER_WIN',
}

export const RSPGAME_WINS = new Map([
  [RSPGAME_VALUES.ROCK, RSPGAME_VALUES.SCISSORS],
  [RSPGAME_VALUES.SCISSORS, RSPGAME_VALUES.PAPER],
  [RSPGAME_VALUES.PAPER, RSPGAME_VALUES.ROCK],
]);
