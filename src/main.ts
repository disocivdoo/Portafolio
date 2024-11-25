import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app.component';

bootstrapApplication(App, {
  providers: [
    provideRouter([]),
    provideAnimations()
  ]
}).catch(err => console.error(err));