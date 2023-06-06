import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { BaselineComponent } from './baseline/baseline.component';
import { CreatewhatifComponent } from './createwhatif/createwhatif.component';
import { ShareComponent } from './share/share.component';


@NgModule({
  declarations: [
    BaselineComponent,
    CreatewhatifComponent,
    ShareComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ,	QuickUiModule,
]
})
export class TestModule { }
