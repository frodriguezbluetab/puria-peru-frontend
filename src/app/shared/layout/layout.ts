import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  imports: [
    CommonModule,
    RouterModule,
    Sidebar,
    ButtonModule,
    Popover,
    InputGroup,
    InputGroupAddonModule
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

  logout() {
    
  }
}
