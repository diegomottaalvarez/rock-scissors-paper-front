import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { CustomGlobalSpinnerService } from './services/custom-global-spinner.service';

@Injectable()
export class CustomGlobalSpinnerInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  /**
   * Lista blanca de llamadas para las que no se muestra spinner
   */
  private readonly partialUrlsToExclude = ['/game/save'];

  constructor(private customGlobalSpinnerService: CustomGlobalSpinnerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.partialUrlsToExclude.some((item) => request.url.indexOf(item) !== -1)
    ) {
      return next.handle(request);
    }
    if (this.activeRequests === 0) {
      this.customGlobalSpinnerService.startLoading();
    }

    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.customGlobalSpinnerService.stopLoading();
        }
      })
    );
  }
}
