import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoot: Routes = [
 
  { path: '', component: LoginComponent },
  { path: 'UserLogin', component: LoginComponent },
  { path: 'Userregister' , component: UserregisterComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoot)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
