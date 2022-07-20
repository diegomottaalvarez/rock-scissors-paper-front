import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ReactiveFormsModule,
    HomeRoutingModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
  ],
  exports: [],
})
export class HomeModule {}
