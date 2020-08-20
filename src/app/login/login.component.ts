import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedUser : any;
  user: any;

  constructor(private service : UserService , private router : Router) { 
    this.user = {mailId: '' , password : ''};
    }

  ngOnInit(): void {
     
  }
  /*async LoginSubmit(LoginForm: any){
    await this.service.loginUser(this.user.mailId, this.user.password).then((user) => {console.log(user); this.loggedUser = user} );
    
    localStorage.setItem('user' , JSON.stringify(this.loggedUser));
    
    if(this.loggedUser != null){
     alert('Success');
    } else {
      alert('Invalid');
    }

  }*/
  async loginSubmit(loginForm:any) {
    await this.service.loginUser(this.user.mailId, this.user.password).then((result) => {console.log(result); this.loggedUser = result} );
    if(this.loggedUser != null){
      alert('Login Successful !!!');
    } else {
      alert('Inavalid Cerenditals');
    }



  }
}


