import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Landing2RoutingModule { }
