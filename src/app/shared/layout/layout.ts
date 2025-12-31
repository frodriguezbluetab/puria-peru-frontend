import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  imports: [
    CommonModule,
    RouterModule,
    Sidebar
  ]
})
export class Layout {
  sidebarCollapsed = false;

  toggleCollapseChildren(componentRef: any) {
    if (componentRef.sidebarToggle) {
      componentRef.sidebarToggle.subscribe((value: boolean) => {
        this.sidebarCollapsed = value;
      });
    }
  }
}
