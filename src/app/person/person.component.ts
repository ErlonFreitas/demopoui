import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  readonly title = "Visão de pessoas";
  readonly dataApi = 'http://localhost:8051/api/rh/v1/persons/';
  readonly schemaApi = 'http://localhost:8051/api/rh/v1/persons/schema';

  constructor() { }

  ngOnInit(): void {
  }
}
