import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {ImcCalculator} from '../imc-calculator';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-modal-imc-calculator',
  templateUrl: './modal-imc-calculator.component.html',
  styleUrls: ['./modal-imc-calculator.component.css']
})
export class ModalImcCalculatorComponent implements OnInit {

  imcCalculator: ImcCalculator = new ImcCalculator();
  result:null;
  submitted = false;

  @Input() my_modal_title;
  @Input() my_modal_content;

  constructor(
      public activeModal: NgbActiveModal,
      private patientService: PatientService,
      private router: Router) {

    this.imcCalculator = new ImcCalculator();}

  ngOnInit() {
  }

  save() {

    this.patientService.postImcCalculator(this.imcCalculator)
      .subscribe(data => (this.result = data.imc));
    this.imcCalculator = new ImcCalculator();
   
  }

  onSubmit(){ 
    this.submitted = true;
    this.save();    
  }
  

}
