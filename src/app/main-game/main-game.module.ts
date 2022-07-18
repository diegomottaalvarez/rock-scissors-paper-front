import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MainGameRoutingModule } from './main-game-routing.module';
import { MainGameComponent } from './main-game.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameScoresComponent } from './game-scores/game-scores.component';
@NgModule({
  declarations: [MainGameComponent, GameBoardComponent, GameScoresComponent],
  imports: [CommonModule, SharedModule, MainGameRoutingModule],
})
export class MainGameModule {}
