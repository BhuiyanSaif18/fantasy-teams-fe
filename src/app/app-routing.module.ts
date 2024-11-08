import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import("./my-team/my-team.module").then(m=> m.MyTeamModule),
    canActivate : [authGuard]
  },
  {
    path : 'marketplace',
    loadChildren : () => import("./marketplace/marketplace.module").then(m => m.MarketplaceModule),
    canActivate : [authGuard]
  },
  {
    path : 'login',
    loadChildren : () => import("./auth/auth.module").then(m=> m.AuthModule)
  },
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
