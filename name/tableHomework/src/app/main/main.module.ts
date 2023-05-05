import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MainRoutingModule } from './main-routing.module';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzTableModule,
    NzIconModule,

    NzModalModule,
    FormsModule
  ]
})
export class MainModule { }
