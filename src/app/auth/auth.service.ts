import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../dtos/loginDto';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: LoginDto) : Observable<any> {
    return this.http.post(environment.apiUrl+'Uam/Login', loginData);
  }
}
