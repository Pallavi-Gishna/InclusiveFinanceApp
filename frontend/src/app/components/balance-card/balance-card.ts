import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { CountUpService } from '../../services/count-up.service';

@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './balance-card.html',
  styleUrls: ['./balance-card.scss'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class BalanceCard implements OnInit {
  balance = 0;

  constructor(private countUp: CountUpService) {}

  ngOnInit() {
    this.countUp.countUp(124582, 2000).subscribe(value => {
      this.balance = value;
    });
  }
}
