import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  user: any;

  constructor(private service: UserService) {  
    this.user= {};
   }

  ngOnInit(): void {
  }
  RegisterSubmit(): void {
    this.service.registerUser(this.user).subscribe((user: any) =>  {console.log(user);} ) ;
    alert('Succesfull');
    
  }

}
