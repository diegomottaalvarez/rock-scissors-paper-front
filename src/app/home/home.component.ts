import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from './../models/rsp.model';
import { GameService } from './../services/game.service';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  startGameForm: FormGroup;
  subscriptions: Subscription = new Subscription();
  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {
    this.initForm();
    this.subscriptions.add(
      this.gameService.getCurrentGame().subscribe((res) => {
        if (res) {
          this.router.navigate(['game']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  initForm() {
    this.startGameForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
    });
  }

  onStartButtonClick() {
    if (!this.username?.value) {
      return;
    }
    this.startGame();
  }

  startGame() {
    this.gameService.getOrCreateGame(this.username.value).subscribe((res) => {
      this.router.navigate(['game']);
    });
  }

  get username(): AbstractControl | null {
    return this.startGameForm.get('username');
  }
}
