import { Patient } from '../patient';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ListPatientComponent } from '../list-patient/list-patient.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.css']
})
export class DetailsPatientComponent implements OnInit {

  id: number;
  patient: Patient;

  constructor(private route: ActivatedRoute,private router: Router,
    private patientService: PatientService) { }

  ngOnInit() {
    this.patient = new Patient();

    this.id = this.route.snapshot.params['id'];
    
    this.patientService.getPatient(this.id)
      .subscribe(data => {
        console.log(data)
        this.patient = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['patients']);
  }
}