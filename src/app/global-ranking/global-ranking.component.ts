import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { GameModel } from '../models/rsp.model';
import { GameService } from './../services/game.service';

@Component({
  selector: 'app-global-ranking',
  templateUrl: './global-ranking.component.html',
  styleUrls: ['./global-ranking.component.scss'],
})
export class GlobalRankingComponent implements OnInit {
  public ranking: GameModel[];
  public amount: number = 10;

  public displayedColumns = ['username', 'userWins', 'computerWins'];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getRanking().subscribe();
  }

  getRanking(): Observable<GameModel[]> {
    return this.gameService.getRanking(this.amount).pipe(
      tap((res) => {
        this.ranking = res;
      })
    );
  }
}
