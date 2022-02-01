import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DynamictabledemoComponent} from './dynamictabledemo/dynamictabledemo.component'
import {PersonComponent} from './person/person.component';

const routes: Routes = [
  { path: 'usuarios', component: DynamictabledemoComponent},  
  { path: 'pessoas', component: PersonComponent},    
  { path: '**', component: DynamictabledemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
