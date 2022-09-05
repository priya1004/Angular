import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string=""
  pass:string=""

  constructor() { }

  ngOnInit(): void {
  }

  loginHandler()
  {
    if(this.user=="priya" && this.pass=="priya104")
    {
        localStorage.setItem('status','loggedIn') //key,value
    }
  }

}
