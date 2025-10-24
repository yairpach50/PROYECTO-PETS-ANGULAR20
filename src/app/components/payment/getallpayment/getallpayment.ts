import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PaymentModel } from '../../../models/payment.model';
import { PaymentService } from '../../../services/payment';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallpayment',
  templateUrl: './getallpayment.html',
  styleUrls: ['./getallpayment.css'],
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    TagModule,
    RouterModule,
    CommonModule
  ]
})
export class GetallPayment implements OnInit {
  payments: PaymentModel[] = [];

  constructor(
    private paymentService: PaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paymentService.payments$.subscribe(pags => {
      this.payments = pags;
    });
  }

  addPayment() {
    this.router.navigate(['/payments/create']);
  }
}