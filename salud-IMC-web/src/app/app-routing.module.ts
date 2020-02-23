import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsPatientComponent } from './graphics-patient/graphics-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';

const routes: Routes = [
  { path: '', component: GraphicsPatientComponent },
  { path: 'patients', component: ListPatientComponent },
  { path: 'add', component: CreatePatientComponent },
  { path: 'update/:id', component: UpdatePatientComponent },
  { path: 'details/:id', component: DetailsPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }