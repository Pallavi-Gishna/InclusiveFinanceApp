import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  LayoutDashboard,
  CreditCard,
  Receipt,
  Shield,
  Lightbulb,
  Settings,
  Menu,
  X,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class Sidebar {
  @Input() isCollapsed = false;
  @Output() toggleCollapse = new EventEmitter<void>();

  isMobileOpen = false;

  Menu = Menu;
  X = X;

  menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: CreditCard, label: 'Transactions', path: '/transactions' },
    { icon: Receipt, label: 'Loans', path: '/loans' },
    { icon: Shield, label: 'Insurance', path: '/insurance' },
    { icon: Lightbulb, label: 'Recommendations', path: '/recommendations' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  constructor(private router: Router) {}

  navigate(item: any) {
    this.router.navigate([item.path]);
    this.isMobileOpen = false;
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
