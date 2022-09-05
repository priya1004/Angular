import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisitorRegisterComponent } from './visitor-register/visitor-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'visitor-register',component:VisitorRegisterComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisitorRegisterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // from root 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
