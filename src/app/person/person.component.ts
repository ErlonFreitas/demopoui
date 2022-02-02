import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  readonly hostapi = 'http://localhost:8051/api/rh/v1/persons/';
  readonly title = "Visão de pessoas xx";

  constructor() { }

  ngOnInit(): void {
  }

}
