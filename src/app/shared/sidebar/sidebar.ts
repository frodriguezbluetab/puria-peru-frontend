import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule, 
    ButtonModule, 
    AvatarModule, 
    RippleModule, 
    RouterModule,
    AccordionModule 
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private router = inject(Router);
  isExpanded = signal<boolean>(true);

  menuItems = [
    { 
      label: 'Generadores', 
      icon: '', 
      route: 'generadores',
      children: [
        { label: 'Documentos de alcance', icon: '', route: 'documentos-alcance' },
      ] 
    },
    { 
      label: 'Convertidores', 
      icon: '',
      route: 'convertidores',
      // children: [
      //   { label: 'Lista de convertidores', icon: '', route: 'lista-convertidores' },
      // ] 
    },
  ];

  toggleSidebar() {
    this.isExpanded.update(v => !v);
  }

  isActive(routeSnippet: string): boolean {
    return this.router.url.includes(routeSnippet);
  }

  resolvePath(parentRoute: string, childRoute?: string): string[] {
    const base = ['/main', parentRoute];
    if (childRoute) {
      return [...base, childRoute];
    }
    return base;
  }
}