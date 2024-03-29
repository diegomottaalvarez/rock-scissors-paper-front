import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameModel } from '../../models/rsp.model';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public gameStarted$: Observable<GameModel>;
  constructor(private gameService: GameService, public router: Router) {}

  ngOnInit(): void {
    this.gameStarted$ = this.gameService.getCurrentGame();
  }

  endGame() {
    this.gameService.deleteCurrentGame();
    this.router.navigate(['']);
  }
}
