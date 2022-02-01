import { Component, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoDynamicViewField, PoModalComponent } from '@po-ui/ng-components';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomAction,
  PoPageDynamicTableCustomTableAction,
  PoPageDynamicTableOptions
} from '@po-ui/ng-templates';

import { SamplePoPageDynamicTableUsersService } from './sample-po-page-dynamic-table-users.service';

@Component({
  selector: 'sample-po-page-dynamic-table-users',
  templateUrl: './dynamictabledemo.component.html',
  providers: [SamplePoPageDynamicTableUsersService]
})
export class DynamictabledemoComponent {
  @ViewChild('userDetailModal') userDetailModal: PoModalComponent;

  //readonly serviceApi = 'https://po-sample-api.herokuapp.com/v1/people';
  readonly serviceApi = 'http://localhost:8051/api/rh/v1/persons/';
  detailedUser;
  quickSearchWidth: number = 3;

  readonly actions: PoPageDynamicTableActions = {
    new: '/documentation/po-page-dynamic-edit',
    remove: true,
    removeAll: true
  };

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Usuários' }]
  };

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

  pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
    { label: 'Print', action: this.printPage.bind(this), icon: 'po-icon-print' },
    {
      label: 'Download .csv',
      action: this.usersService.downloadCsv.bind(this.usersService, this.serviceApi),
      icon: 'po-icon-download'
    }
  ];

  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
    {
      label: 'Details',
      action: this.onClickUserDetail.bind(this),
      disabled: this.isUserInactive.bind(this),
      icon: 'po-icon-user'
    }
  ];

  constructor(private usersService: SamplePoPageDynamicTableUsersService) {}

  /*onLoad(): PoPageDynamicTableOptions {
    return {
      fields: [
        { property: 'id', key: true, visible: true, filter: true },
        { property: 'name', label: 'Name', filter: true, gridColumns: 6 },
        { property: 'genre', label: 'Genre', filter: true, gridColumns: 6, duplicate: true },
        { property: 'search', initValue: 'São Paulo' },
        {
          property: 'birthdate',
          label: 'Birthdate',
          type: 'date',
          gridColumns: 6,
          visible: false,
          allowColumnsManager: true
        }
      ]
    };
  }*/

  isUserInactive(person) {
    return person.status === 'inactive';
  }

  printPage() {
    window.print();
  }

  private onClickUserDetail(user) {
    this.detailedUser = user;

    this.userDetailModal.open();
  }
}