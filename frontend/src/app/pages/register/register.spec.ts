import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Register } from './register';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Register component', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the register component', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow mismatched passwords', () => {
    component.password = 'abc123';
    component.confirmPassword = 'different';
    component.onRegister();
    expect(component.errorMsg).toBe('Passwords do not match');
  });

  it('should navigate to dashboard after successful registration', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.name = 'Test User';
    component.email = 'user@test.com';
    component.password = 'secret';
    component.confirmPassword = 'secret';
    component.onRegister();
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });
});
