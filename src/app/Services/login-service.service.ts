import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient,private routes:Router) { }
  
  //sign in -- backend url for login
  signin(login:any){
    return this.http.post<any>("https://localhost:7298/api/Login",login);
  }
  // https://localhost:7125/api/Login

  //store the token
  storetoken(tokenvalue:string){
    localStorage.setItem('token',tokenvalue);
  }

  //get the token
  gettoken(){
    return localStorage.getItem('token');
  }

  //check whether the user is logged in sucess or not
  isloggedin():boolean{
    return !!localStorage.getItem('token');    //true or false
  }

  signout(){
    localStorage.clear();
    this.routes.navigate(['login']);
  }
}
