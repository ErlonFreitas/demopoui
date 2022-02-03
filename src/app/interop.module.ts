import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { APPROUTES, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { DynamictabledemoComponent } from './dynamictabledemo/dynamictabledemo.component';
import {TokenInterceptor} from './auth/token.interceptor';
import { TSmartGridModule } from 'projects/ui/t-smart-grid/src/lib/t-smart-grid.module';
import {PersonComponent} from './person/person.component';

@NgModule({
  declarations: [
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forChild(APPROUTES),
    PoTemplatesModule,
    TSmartGridModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class InteropModule { }
