import { Component } from '@angular/core';
import { OwnerI } from '../../../models/owner';
import { Owner } from '../../../services/owner';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-getallowner',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './getallowner.html',
  styleUrls: ['./getallowner.css']
})
export class Getall {
    owners!: OwnerI[];
    constructor(private ownerService: Owner) {
    this.ownerService.owner$.subscribe(owners => {
      this.owners = owners;
    });
  }
 }

