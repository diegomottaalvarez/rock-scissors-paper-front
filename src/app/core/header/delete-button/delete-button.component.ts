import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent implements OnInit {
  endGameEmitter: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  endGame() {
    this.endGameEmitter.emit();
  }
}
