import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PatientService } from "../patient.service";
import { Patient } from "../patient";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  patients: Observable<Patient[]>;

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.patientService.getPatientList();
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updatePatient(id: number){
    this.router.navigate(['update', id]);
  }

  patientDetails(id: number){
    this.router.navigate(['details', id]);
  }
}