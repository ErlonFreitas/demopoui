import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public version: string = "1.0";
  menuReportApp: Array<PoMenuItem> = new Array<PoMenuItem>();

  ngOnInit() {
    this.loadMenus();        
   }  

  public getTitle(): string {
    let result = "Teste po-ui";
    return result;
  }  
  

  private loadMenus() {
    this.LoadMenuApp();
  }

  private LoadMenuApp() {
    this.menuReportApp.push({
      label: "Visão de Pessoas",
      shortLabel: "Visão de Pessoas",
      link: "pessoas",
      icon: " po-icon-world"
    });    
      this.menuReportApp.push({
        label: "Visão de Usuários",
        shortLabel: "Visão de Usuários",
        link: "usuarios",
        icon: " po-icon-world"
      });
    }  
    
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
