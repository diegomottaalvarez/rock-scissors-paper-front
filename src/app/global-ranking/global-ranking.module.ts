import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GlobalRankingRoutingModule } from './global-ranking-routing.module';
import { GlobalRankingComponent } from './global-ranking.component';

@NgModule({
  declarations: [GlobalRankingComponent],
  imports: [CommonModule, GlobalRankingRoutingModule, HttpClientModule],
})
export class GlobalRankingModule {}
