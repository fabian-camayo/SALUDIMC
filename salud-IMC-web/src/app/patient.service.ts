import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:8080/salud-imc-rest/api/v1/patients';
  private imcCalculatorUrl = 'http://localhost:8080/salud-imc-rest/api/v1/imc-calculator';

  constructor(private http: HttpClient) { }

  getPatient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getGraphics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/graphics`);
  }

  createPatient(patient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, patient);
  }

  updatePatient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPatientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  postImcCalculator(imcCalculator: Object): Observable<any> {
    return this.http.post(`${this.imcCalculatorUrl}`,imcCalculator);
  }
}
