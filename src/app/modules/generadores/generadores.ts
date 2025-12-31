import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
  selector: 'app-generadores',
  imports: [
    CommonModule, 
    RouterModule,
    Breadcrumb 
  ],
  templateUrl: './generadores.html',
  styleUrl: './generadores.scss',
})
export class Generadores implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Generadores' },
          { label: 'Documentos de alcance' }
      ];
  }
}
