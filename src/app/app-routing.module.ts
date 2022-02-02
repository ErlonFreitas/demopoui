import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DynamictabledemoComponent} from './dynamictabledemo/dynamictabledemo.component'
import {PersonComponent} from './person/person.component';

const routes: Routes = [
  { path: 'usuarios', component: DynamictabledemoComponent},  
  //{ path: '**', component: DynamictabledemoComponent},
  {
    path: 'pessoas',
    component: PersonComponent/*,
    data: {
       serviceApi: 'http://localhost:8051/api/rh/v1/persons1/', // endpoint dos dados
       serviceMetadataApi: '', // endpoint dos metadados utilizando o método HTTP Get
       serviceLoadApi: '' // endpoint de customizações dos metadados utilizando o método HTTP Post
     }*/
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
