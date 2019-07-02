import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Landing2RoutingModule } from './landing2-routing.module';
import { UsersComponent } from './users/users.component';
import { SearchComponent } from './search/search.component';
import { StandardModule } from '../shared/standard/standard.module';

@NgModule({
  declarations: [UsersComponent, SearchComponent],
  imports: [
    CommonModule,
    Landing2RoutingModule,
    StandardModule,
  ]
})
export class Landing2Module { }
