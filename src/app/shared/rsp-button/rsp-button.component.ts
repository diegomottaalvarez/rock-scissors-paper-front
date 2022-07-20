import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('button') button: ElementRef;

  constructor() {}

  onButtonClick() {
    this.removeHighlights();

    this.button.nativeElement.classList.add('buttonSelected');
    this.valueEmitter.emit(this.value);
  }

  removeHighlights() {
    const buttons = document.querySelectorAll('button.buttonSelected');
    buttons &&
      Array.from(buttons).map((item) =>
        item.classList.remove('buttonSelected')
      );
  }
}
