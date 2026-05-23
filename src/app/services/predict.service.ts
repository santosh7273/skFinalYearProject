import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  private apiUrl =
    'http://127.0.0.1:5000/predict_disease_and_give_assistance';

  constructor(private http: HttpClient) {}

  predictImage(formData: FormData) {
    return this.http.post<any>(this.apiUrl, formData);
  }
}