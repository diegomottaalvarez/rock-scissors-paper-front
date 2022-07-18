import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [ReactiveFormsModule, HomeRoutingModule],
  exports: [],
})
export class HomeModule {}
