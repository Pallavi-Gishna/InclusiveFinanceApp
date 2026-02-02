import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeExpensesChartComponent } from './income-expenses-chart';

describe('IncomeExpensesChartComponent', () => {
  let component: IncomeExpensesChartComponent;
  let fixture: ComponentFixture<IncomeExpensesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeExpensesChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeExpensesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
