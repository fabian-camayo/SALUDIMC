import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GraphicsPatientComponent } from './graphics-patient/graphics-patient.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalImcCalculatorComponent } from './modal-imc-calculator/modal-imc-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePatientComponent,
    ListPatientComponent,
    DetailsPatientComponent,
    UpdatePatientComponent,
    GraphicsPatientComponent,
    ModalImcCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    NgbModule
  ],
  entryComponents:[
    ModalImcCalculatorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
