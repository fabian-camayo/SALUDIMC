import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImcCalculatorComponent } from './modal-imc-calculator.component';

describe('ModalImcCalculatorComponent', () => {
  let component: ModalImcCalculatorComponent;
  let fixture: ComponentFixture<ModalImcCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalImcCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImcCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
