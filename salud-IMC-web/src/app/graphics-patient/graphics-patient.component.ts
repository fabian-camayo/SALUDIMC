import { Graphics } from '../graphics';
import { Component,OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalImcCalculatorComponent } from '../modal-imc-calculator/modal-imc-calculator.component';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-graphics-patient',
  templateUrl: './graphics-patient.component.html',
  styleUrls: ['./graphics-patient.component.css']
})
export class GraphicsPatientComponent  {
    constructor(public modalService: NgbModal,private patientService: PatientService) {}
 graphics = new Graphics();
    ngOnInit() {

      this.patientService.getGraphics()
        .subscribe(data => {
        console.log(data)
        this.graphics = data;
      }, error => console.log(error));
      const data = [
        this.graphics.underweight,
        this.graphics.healthy,
        this.graphics.overweight,
        this.graphics.obese
        ];
      this.barChartData[0].data = data;
    }


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Bajo peso', 'Saludable', 'Sobrepeso', 'Obeso'];
  public barChartType: string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData: any[] = [
    { data: [],
      label: 'Número de personas',
      backgroundColor: 'rgba(72, 159, 85)',
      borderColor: 'rgb(0, 82, 15)',
      hoverBackgroundColor:'rgb(0, 82, 15)'
    }
  ];

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  open() {
debugger;
    const modalRef = this.modalService.open(ModalImcCalculatorComponent);
    modalRef.componentInstance.my_modal_title = 'Índice de masa corporal';
    modalRef.componentInstance.my_modal_content = 'Ingrese los datos necesarios';
  }

}
