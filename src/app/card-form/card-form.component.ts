import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: PaymentService) { }

  pastDate = '';
  valid = false;

  paymentForm = this.fb.group({
    cardNumber : ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('[0-9]*')]],
    cardHolderName : ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    expirationDate : ['', [Validators.required, Validators.maxLength(50)]],
    securityCode : ['', [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('[0-9]*')]],
    amount : ['', [Validators.required, Validators.pattern('[0-9]*')]]
  });

  restrictDate(): void{
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    const year = d.getFullYear();

    if (month.length < 2){
      month = '0' + month;
    }

    this.pastDate = [year, month].join('-');
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  retornozada: Observable<Payment>

  submitPayment(submit: boolean): void{
    const paymentObj: Payment = this.paymentForm.value;
    if (submit){
      this.service.paymentPOST(paymentObj);

      this.paymentForm.reset();
    } else {
      this.service.paymentPOST(paymentObj).unsubscribe;
    }
  }

  ngOnInit(): void {
    this.restrictDate();
  }

  ngOnDestroy(): void{
    this.submitPayment(false);
  }
}
