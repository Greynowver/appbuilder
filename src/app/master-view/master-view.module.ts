import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { ChildView1Component } from './child-view1/child-view1.component';
import { IgxNavigationDrawerModule, IgxIconModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MasterViewComponent,
    View1Component,
    View2Component,
    View3Component,
    ChildView1Component
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxExpansionPanelModule,
    FormsModule
  ]
})
export class MasterViewModule {
}
