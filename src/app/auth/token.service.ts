import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private localStorage : LocalStorageService) {
  }

  isAuthenticated() : boolean{
    const token = this.localStorage.retrieve('token');
    if(token){
      return true;
    }
    return false;
  }
}
