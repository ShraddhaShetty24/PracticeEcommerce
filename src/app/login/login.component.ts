import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/Login';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login={
    userName:'',
    userPassword:''
  }

  constructor(private router:Router, private authService:LoginServiceService) { }

  
  loginDetails(){
    console.log(this.login)
    this.authService.signin(this.login).subscribe((res:any)=>{
      console.log('res',res.token);
      this.authService.storetoken(res.token);

      this.router.navigate(['product-crud']);
    })
  }
  logout(){
    this.authService.signout();
    this.router.navigate(['footer']);
}
ngOnInit(): void {

}

}
