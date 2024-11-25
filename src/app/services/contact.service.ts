import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  submitForm(formData: ContactForm): Observable<boolean> {
    // Simulate API call
    console.log('Form submitted:', formData);
    return of(true);
  }
}