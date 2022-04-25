import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutesComponent } from './institutes/institutes.component';
import { MunicipiesComponent } from './municipies/municipies.component';
import { CampusComponent } from './campus/campus.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: '', redirectTo: '/municipies', pathMatch: 'full' },
  { path: 'municipies', component: MunicipiesComponent },
  { path: 'institutes/:id', component: InstitutesComponent },
  { path: 'campus/:id', component: CampusComponent },
  { path: 'groups/:id', component: GroupsComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
