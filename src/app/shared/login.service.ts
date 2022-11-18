import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) { }

  readonly baseUrl = "https://uat.wmsdeal.com/maui/auth";

  formData: Login = new Login();

  postLogin(){
    return this.http.post(this.baseUrl + '/login', this.formData)
  }
}
