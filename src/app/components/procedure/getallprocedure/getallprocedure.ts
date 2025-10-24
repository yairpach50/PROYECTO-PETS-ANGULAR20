import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProcedureModel } from '../../../models/procedure.model';
import { ProcedureService } from '../../../services/procedure';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallprocedure',
  templateUrl: './getallprocedure.html',
  styleUrls: ['./getallprocedure.css'],
  standalone: true, 
  imports: [
    TableModule,
    ButtonModule,
    TagModule,
    RouterModule,
    CommonModule
  ]
})
export class GetallProcedure implements OnInit {
  procedures: ProcedureModel[] = [];

  constructor(
    private procedureService: ProcedureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.procedureService.procedures$.subscribe(procs => {
      this.procedures = procs;
    });
  }

  addProcedure() {
    this.router.navigate(['/procedures/create']);
  }
}