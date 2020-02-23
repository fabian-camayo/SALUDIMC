import { Component,OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalImcCalculatorComponent } from '../modal-imc-calculator/modal-imc-calculator.component';


@Component({
  selector: 'app-graphics-patient',
  templateUrl: './graphics-patient.component.html',
  styleUrls: ['./graphics-patient.component.css']
})
export class GraphicsPatientComponent  {
    constructor(public modalService: NgbModal) {}

    ngOnInit() {
       
    }


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['10', '15', '20', '25', '30', '35', '40'];
  public barChartType: string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'IMC' }
  ];
  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

  open() {
    const modalRef = this.modalService.open(ModalImcCalculatorComponent);
    modalRef.componentInstance.my_modal_title = 'Calcular el indice de masa corporal';
    modalRef.componentInstance.my_modal_content = 'Ingrese los datos necesarios';
  }
}
