import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartConfiguration,
  ChartOptions,
} from 'chart.js';
import { trigger, transition, style, animate } from '@angular/animations';

/* 🔴 REQUIRED FOR CHART.JS v3+ */
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-income-expenses-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './income-expenses-chart.html',
  styleUrls: ['./income-expenses-chart.scss'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        animate(
          '600ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class IncomeExpensesChartComponent {
  data: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [12500, 13200, 14100, 13800, 15200, 14800],
        backgroundColor: 'rgba(16,185,129,0.85)',
        borderRadius: 10,
        barThickness: 22,
      },
      {
        label: 'Expenses',
        data: [8200, 8800, 9200, 9500, 10100, 9800],
        backgroundColor: 'rgba(239,68,68,0.85)',
        borderRadius: 10,
        barThickness: 22,
      },
    ],
  };

  options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1200,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: {
        labels: {
          color: '#9ca3af',
          font: {
            weight: 300,
          },
        },
      },
      tooltip: {
        backgroundColor: '#0f0f0f',
        borderColor: '#1f2937',
        borderWidth: 1,
        padding: 12,
      },
    },
    scales: {
      x: {
        ticks: { color: '#6b7280' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        ticks: { color: '#6b7280' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  };
}
