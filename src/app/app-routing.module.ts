import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'game',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./main-game/main-game.module').then((m) => m.MainGameModule),
  },
  {
    path: 'ranking',
    loadChildren: () =>
      import('./global-ranking/global-ranking.module').then(
        (m) => m.GlobalRankingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
