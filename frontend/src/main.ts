import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { App } from './app/app';

bootstrapApplication(App, appConfig,)
  .catch((err) => console.error(err));
