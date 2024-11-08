import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit{
  authForm! : FormGroup;
  /**
   *
   */
  constructor(private fb : FormBuilder,
    private authService : AuthService,
    private storage:LocalStorageService,
    private router : Router
  ) {
    
  }
  ngOnInit(): void {
    this.authForm = this.fb.group({
      email :["",[Validators.email, Validators.required]],
      password : ["", [Validators.required]]
    });
  }

  login(){
    this.authService.login(this.authForm.value).subscribe(x=>{
      this.storage.store('token', x.results.accessToken);
      this.router.navigateByUrl('/');
    });
  }

}
