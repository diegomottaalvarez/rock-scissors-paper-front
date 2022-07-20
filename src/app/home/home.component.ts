import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './../services/game.service';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  startGameForm: FormGroup;
  subscriptions: Subscription = new Subscription();
  matcher;
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
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$'),
      ]),
    });
    this.matcher = new MyErrorStateMatcher();
  }

  onStartButtonClick() {
    if (!this.username?.value || this.startGameForm.invalid) {
      return;
    }
    this.startGame();
  }

  startGame() {
    this.gameService
      .getOrCreateGame(this.username.value.trim())
      .subscribe((res) => {
        this.router.navigate(['game']);
      });
  }

  get username(): AbstractControl | null {
    return this.startGameForm.get('username');
  }
}
