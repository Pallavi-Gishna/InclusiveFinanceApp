import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Login component', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the Login component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind email and password', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailInput = compiled.querySelector('input[type="email"]') as HTMLInputElement;
    const passwordInput = compiled.querySelector('input[type="password"]') as HTMLInputElement;

    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.value = '123456';
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.email).toBe('test@example.com');
    expect(component.password).toBe('123456');
  });

 /* it('should navigate to dashboard on Login if fields are filled', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.email = 'user@test.com';
    component.password = 'secret';
    component.onLogin();
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });

   it('should alert if fields are empty', () => {
    spyOn(window, 'alert');
    component.email = '';
    component.password = '';
    component.onLogin();
    expect(window.alert).toHaveBeenCalledWith('Please fill in all fields.');
  });
  */

});

