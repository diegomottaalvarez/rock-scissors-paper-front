import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CustomGlobalSpinnerService {
  private _loading = false;
  loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  get loading(): boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  getLoadingStatus() {
    return this.loadingStatus.asObservable();
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
