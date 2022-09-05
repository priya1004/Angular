import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit(): void {
  }

  loginHandler()
  {
    this.r.navigate(['login'])
  }
  registerHandler()

  {
    this.r.navigate(['register'])
  }
}
