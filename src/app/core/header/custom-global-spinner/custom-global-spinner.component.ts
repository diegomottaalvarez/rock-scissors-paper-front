import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { CustomGlobalSpinnerService } from './services/custom-global-spinner.service';

@Component({
  selector: 'app-custom-global-spinner',
  templateUrl: './custom-global-spinner.component.html',
  styleUrls: ['./custom-global-spinner.component.scss'],
})
export class CustomGlobalSpinnerComponent implements AfterViewInit, OnDestroy {
  public loading = false;
  private subscriptions: Subscription = new Subscription();
  private debounceTime = 200;
  public customClass: string;
  constructor(
    private customGlobalSpinnerService: CustomGlobalSpinnerService,
    private elmRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngAfterViewInit() {
    // const routerSubscription = this.router.events
    //   .pipe(filter((event: any) => event instanceof NavigationEnd))
    //   .subscribe((event) => {
    //     const urlIdentifier = event.url.split('/').pop();
    //     if (urlIdentifier === 'requests' || urlIdentifier === 'candidates') {
    //       this.customClass = 'bottom-spinner';
    //     } else {
    //       this.customClass = '';
    //     }
    //   });
    // this.subscriptions.add(routerSubscription);
    this.elmRef.nativeElement.style.display = 'none';
    const loadingSubscription = this.customGlobalSpinnerService.loadingStatus
      .pipe(debounceTime(this.debounceTime))
      .subscribe((status: boolean) => {
        this.elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this.changeDetectorRef.detectChanges();
      });
    this.subscriptions.add(loadingSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
