import { Component, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';

@Component({
  selector: 'app-visitor-register',
  templateUrl: './visitor-register.component.html',
  styleUrls: ['./visitor-register.component.css']
})
export class VisitorRegisterComponent implements OnInit {
  visitor:Visitor=new Visitor();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitHandler()
  {
    alert(this.visitor)
  }

}
