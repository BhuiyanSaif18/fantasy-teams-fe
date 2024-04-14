import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: AuthComponent }
];
@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    AuthComponent
  ],
  providers : [AuthService]
})
export class AuthModule { }
