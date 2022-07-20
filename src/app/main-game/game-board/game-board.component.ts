import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RSPGAME_VALUES, RSP_VALUES_IMAGES_MAP } from '../../models/rsp.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  RSP_VALUES_IMAGES_MAP = RSP_VALUES_IMAGES_MAP;
  buttonsList = Object.values(RSPGAME_VALUES);

  @Output() sendChoiceEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onButtonClick(value) {
    this.sendChoiceEmitter.emit(value);
  }
}
