import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Payment } from './models/payment';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  paymentUrl = 'http://localhost:3000/payment';

  paymentPOST(payment: Payment){

    return this.http.post<Payment>(this.paymentUrl, payment).subscribe(
      (data) => {},
      (error) => {
        console.log(error);
      }
    );

  }
}

