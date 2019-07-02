import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { StandardModule } from '../shared/standard/standard.module';

@NgModule({
  declarations: [LoggedOutComponent, LoggedInComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    StandardModule,
  ]
})
export class LandingModule { }
