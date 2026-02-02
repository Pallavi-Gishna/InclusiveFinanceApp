import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthGuard } from './services/auth.guard';
import { LandingPage } from './pages/landing-page/landing-page';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Transactions } from './pages/transaction/transaction';
import { Loans } from './pages/loans/loans';
import { Insurance } from './pages/insurance/insurance';
import { Recommendations } from './pages/recommendations/recommendations';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  { path: '', component: LandingPage }, 
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component:Contact },
  { path: 'transactions', component: Transactions },
  { path: 'loans', component: Loans },
  { path: 'insurance', component: Insurance },
  { path: 'recommendations', component: Recommendations },
  { path: 'settings', component: Settings },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' } 
];
