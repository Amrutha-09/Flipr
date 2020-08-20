import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLogged: any;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = true;
  }
  registerUser(user: any) {
    console.log('Inside service',user);
    return this.httpClient.post('StockExchange/webapi/myresource/regUser', user);
  }
  loginUser(mailId: any, password: any): any {
    return this.httpClient.get('StockExchange/webapi/myresource/userLogin/' + mailId + '/' + password).toPromise();
  }
}
   