import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DeleteButtonComponent } from './core/header/delete-button/delete-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomGlobalSpinnerComponent } from './core/header/custom-global-spinner/custom-global-spinner.component';
import { CustomGlobalSpinnerInterceptor } from './core/header/custom-global-spinner/custom-global-spinner.interceptor';
import { CustomGlobalSpinnerService } from './core/header/custom-global-spinner/services/custom-global-spinner.service';
import { OnlineStatusModule } from 'ngx-online-status';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeleteButtonComponent,
    CustomGlobalSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    OnlineStatusModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [
    CustomGlobalSpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomGlobalSpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
