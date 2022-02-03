import {Input, Directive, Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 't-smart-grid',
  templateUrl: './t-smart-grid.component.html',
  styles: [
  ]
})
export class TSmartGridComponent implements OnInit {
  
  private _title: string = "";
  private _dataApi: string = "";
  private _schemaApi: string = "";

  /** Título*/
  @Input('t-title') set title(value: string) {
    this._title = value;
  }
  
  get title(): string{
    return this._title;
  }

  /**Configura o endereço da api para acesso aos dados da visão */
  @Input('t-data-api') set dataApi(value: string) {
    this._dataApi = value;
  }

  get dataApi(): string {
    return this._dataApi;
  }

  /** Configura o endereço do schema da api */
  @Input('t-schema-api') set schemaApi(value: string){
    this._schemaApi = value;
  }

  get schemaApi(): string {
    return this.schemaApi;
  }

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
    //Valida se o "metadataApi" foi prenchido... caso contrario erro.
    //
  }
}
