import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';

interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  status: 'completed' | 'pending';
  type: 'income' | 'expense';
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './transaction.html',
  styleUrls: ['./transaction.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '300ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class Transactions {
  search = '';

  transactions: Transaction[] = [
    { id: 1, date: 'Jan 28, 2026', description: 'Netflix Subscription', category: 'Entertainment', amount: -15.99, status: 'completed', type: 'expense' },
    { id: 2, date: 'Jan 27, 2026', description: 'Salary Deposit', category: 'Income', amount: 8500.0, status: 'completed', type: 'income' },
    { id: 3, date: 'Jan 26, 2026', description: 'Amazon Purchase', category: 'Shopping', amount: -124.5, status: 'completed', type: 'expense' },
    { id: 4, date: 'Jan 25, 2026', description: 'Grocery Store', category: 'Food & Dining', amount: -85.3, status: 'completed', type: 'expense' },
    { id: 5, date: 'Jan 24, 2026', description: 'Freelance Payment', category: 'Income', amount: 2400.0, status: 'completed', type: 'income' },
    { id: 6, date: 'Jan 23, 2026', description: 'Electric Bill', category: 'Utilities', amount: -120.0, status: 'completed', type: 'expense' },
    { id: 7, date: 'Jan 22, 2026', description: 'Gas Station', category: 'Transportation', amount: -65.0, status: 'completed', type: 'expense' },
    { id: 8, date: 'Jan 21, 2026', description: 'Restaurant', category: 'Food & Dining', amount: -95.5, status: 'completed', type: 'expense' },
    { id: 9, date: 'Jan 20, 2026', description: 'Investment Return', category: 'Income', amount: 1250.0, status: 'completed', type: 'income' },
    { id: 10, date: 'Jan 19, 2026', description: 'Coffee Shop', category: 'Food & Dining', amount: -12.5, status: 'pending', type: 'expense' },
  ];

  get filteredTransactions() {
    if (!this.search) return this.transactions;
    return this.transactions.filter(t =>
      t.description.toLowerCase().includes(this.search.toLowerCase()) ||
      t.category.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  export() {
    console.log('Export clicked');
  }

  filter() {
    console.log('Filter clicked');
  }
}
