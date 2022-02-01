import {Input, Directive, Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 't-smart-grid',
  templateUrl: './t-smart-grid.component.html',
  styles: [
  ]
})
export class TSmartGridComponent implements OnInit {
  readonly serviceApi = 'http://localhost:8051/api/rh/v1/persons/';

  readonly cityOptions: Array<object> = [
    { value: 'São Paulo', label: 'São Paulo' },
    { value: 'Joinville', label: 'Joinville' },
    { value: 'São Bento', label: 'São Bento' },
    { value: 'Araquari', label: 'Araquari' },
    { value: 'Campinas', label: 'Campinas' },
    { value: 'Osasco', label: 'Osasco' }
  ];


  readonly fields: Array<any> = [
    { property: 'id', key: true, visible: false, filter: false },
    { property: 'name', label: 'Nome', filter: true, visible: true },    
    { property: 'student', label: 'Estudante', filter: true, gridColumns: 6 },
    { property: 'teacher', label: 'Professor', filter: true, gridColumns: 6, duplicate: true, sortable: false },
    {
      property: 'birth',
      label: 'Aniversario',
      type: 'date',
      gridColumns: 3,
      visible: true,
      allowColumnsManager: true
    },
    { 
      property: 'email', 
      label: 'Email', 
      filter: true,
      duplicate: true, 
      options: this.cityOptions,
      gridColumns: 12 }
  ];  

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Usuários' }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
