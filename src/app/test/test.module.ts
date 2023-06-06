import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { BaselineComponent } from './baseline/baseline.component';
import { CreatewhatifComponent } from './createwhatif/createwhatif.component';


@NgModule({
  declarations: [
    BaselineComponent,
    CreatewhatifComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ,	QuickUiModule,
]
})
export class TestModule { }
