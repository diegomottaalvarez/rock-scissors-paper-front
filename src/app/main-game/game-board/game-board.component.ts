import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  RSPLSGAME_RESULT_OPTIONS,
  RSPLSGAME_VALUES,
  RSPLSGAME_RESULT_MESSAGES_MAP,
  RSPLSGAME_VALUES_IMAGES_MAP,
} from '../../models/rsp.model';
import { GameModel } from './../../models/rsp.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  RSPLSGAME_VALUES_IMAGES_MAP = RSPLSGAME_VALUES_IMAGES_MAP;
  RSPLSGAME_RESULT_MESSAGES_MAP = RSPLSGAME_RESULT_MESSAGES_MAP;
  buttonsList = Object.values(RSPLSGAME_VALUES);

  @Input() currentGame: GameModel;
  @Input() result: RSPLSGAME_RESULT_OPTIONS;

  @Output() sendChoiceEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onButtonClick(value) {
    this.sendChoiceEmitter.emit(value);
  }
}
