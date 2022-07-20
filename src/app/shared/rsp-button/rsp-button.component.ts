import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-rsp-button',
  templateUrl: './rsp-button.component.html',
  styleUrls: ['./rsp-button.component.scss'],
})
export class RspButtonComponent {
  @Input() image: string;
  @Input() value: string;
  @Output() valueEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onButtonClick() {
    this.valueEmitter.emit(this.value);
  }
}
