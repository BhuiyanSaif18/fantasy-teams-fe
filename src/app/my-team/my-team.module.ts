import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamComponent } from './my-team.component';
import { MyTeamService } from './my-team.service';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MyTeamComponent }
];

@NgModule({
  declarations: [
    MyTeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers : [MyTeamService]
})
export class MyTeamModule { }
