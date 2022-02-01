import { NgModule } from '@angular/core';
import { TSmartGridComponent } from './t-smart-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [
    TSmartGridComponent
  ],
  imports: [
    PoModule,
    PoTemplatesModule
  ],
  exports: [
    TSmartGridComponent
  ]
})
export class TSmartGridModule { }