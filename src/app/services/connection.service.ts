import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
@Injectable({
  providedIn: 'root',
})
export class CustomConnectionService {
  hasConnectionSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    !!this.onlineStatusService.getStatus()
  );
  public hasConnection$ = this.hasConnectionSubject.asObservable();

  constructor(private onlineStatusService: OnlineStatusService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.hasConnectionSubject.next(!!status);
    });
  }
}
