
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('currentUser'))
    {
      this.saveCurrentUserData();
    }
   }

  currentUserData:any = new BehaviorSubject(null);

  register(formData:object):Observable<any>
    {
      return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
    }

  login(formData:object):Observable<any>
    {
      return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
    }

  logout()
  {
    this.currentUserData.next(null);
    localStorage.removeItem("currentUser");
    this._Router.navigate(['/login']);
  } 

  saveCurrentUserData()
  {
    let encodedToken:any = localStorage.getItem("currentUser");

    // let decodedToken = jwtDecode(encodedToken);

    this.currentUserData.next(jwtDecode(encodedToken));
    console.log(this.currentUserData);
    

  }
}
