import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { BalanceCard } from '../../components/balance-card/balance-card';
import { IncomeExpensesChartComponent } from '../../components/income-expenses-chart/income-expenses-chart';
import { Sidebar } from '../../components/sidebar/sidebar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

type ModalType = 'income' | 'budget' | 'savings' | null;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BalanceCard,
    IncomeExpensesChartComponent,
    Sidebar
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class Dashboard implements OnInit {
  userToken: string | null = null;

  activeModal: ModalType = null;

  // ✅ MUST match template bindings
  formData = {
    income: '',
    budget: '',
    savings: '',
    savingsDate: ''
  };

  currentPage = 'Dashboard';
  isSidebarCollapsed = false;

  recentTransactions = [
    { title: 'Salary', category: 'Income', amount: 45000, date: '2026-01-25' },
    { title: 'Groceries', category: 'Food', amount: -1200, date: '2026-01-28' },
    { title: 'Internet Bill', category: 'Utilities', amount: -1800, date: '2026-01-22' }
  ];

  aiInsights = [
    { title: 'Spending Alert', description: 'Food expenses increased by 18% compared to last month.' },
    { title: 'Savings Opportunity', description: 'Reducing subscriptions could save you Rs 2,500/month.' },
    { title: 'Income Stability', description: 'Your income has remained consistent for 3 months.' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('authToken', token);
      params.delete('token');
      window.history.replaceState({}, '', window.location.pathname);
    }

    this.userToken = localStorage.getItem('authToken');
  }

  logout() {
    this.authService.logout();
  }

  openModal(type: 'income' | 'budget' | 'savings') {
    this.activeModal = type;
  }

  closeModal() {
    this.activeModal = null;
  }

  handleSubmit() {
    if (!this.activeModal) return;

    if (this.activeModal === 'income') {
      console.log('Monthly Income:', this.formData.income);
    }

    if (this.activeModal === 'budget') {
      console.log('Monthly Budget:', this.formData.budget);
    }

    if (this.activeModal === 'savings') {
      console.log(
        'Savings Goal:',
        this.formData.savings,
        'Target Date:',
        this.formData.savingsDate
      );
    }

    this.closeModal();
  }

  onNavigate(page: string) {
    this.currentPage = page;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
