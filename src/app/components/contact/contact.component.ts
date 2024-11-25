import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <section id="contact" class="py-20 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">Contacta con Nosotros</h2>
            <p class="text-gray-400" data-aos="fade-up" data-aos-delay="200">
              Estamos aquí para ayudarte a hacer realidad tu proyecto digital
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="text-center" data-aos="fade-up">
              <div class="inline-block p-4 rounded-full bg-gold bg-opacity-10 mb-4">
                <fa-icon [icon]="faPhone" class="text-2xl text-gold"></fa-icon>
              </div>
              <h3 class="text-xl font-semibold mb-2">Teléfono</h3>
              <p class="text-gray-400">+34 123 456 789</p>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="inline-block p-4 rounded-full bg-gold bg-opacity-10 mb-4">
                <fa-icon [icon]="faEnvelope" class="text-2xl text-gold"></fa-icon>
              </div>
              <h3 class="text-xl font-semibold mb-2">Email</h3>
              <p class="text-gray-400">info&#64;digitalstudio.com</p>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="400">
              <div class="inline-block p-4 rounded-full bg-gold bg-opacity-10 mb-4">
                <fa-icon [icon]="faLocationDot" class="text-2xl text-gold"></fa-icon>
              </div>
              <h3 class="text-xl font-semibold mb-2">Ubicación</h3>
              <p class="text-gray-400">Madrid, España</p>
            </div>
          </div>

          <div class="bg-white text-black p-8 rounded-lg shadow-xl" data-aos="fade-up" data-aos-delay="600">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Nombre</label>
                  <input type="text" formControlName="name"
                         class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold">
                  <div *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.invalid"
                       class="text-red-500 text-sm mt-1">
                    Campo requerido
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Email</label>
                  <input type="email" formControlName="email"
                         class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold">
                  <div *ngIf="contactForm.get('email')?.touched && contactForm.get('email')?.invalid"
                       class="text-red-500 text-sm mt-1">
                    Email inválido
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Asunto</label>
                <input type="text" formControlName="subject"
                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Mensaje</label>
                <textarea formControlName="message" rows="4"
                         class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold"></textarea>
                <div *ngIf="contactForm.get('message')?.touched && contactForm.get('message')?.invalid"
                     class="text-red-500 text-sm mt-1">
                  Campo requerido
                </div>
              </div>
              <button type="submit" 
                      [disabled]="!contactForm.valid || isSubmitting"
                      [class.opacity-50]="!contactForm.valid || isSubmitting"
                      class="w-full bg-gold text-black py-3 rounded-lg font-bold hover:bg-opacity-90 
                             transition-colors transform hover:scale-105">
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-gold { background-color: #D4AF37; }
    .text-gold { color: #D4AF37; }
    .focus\:ring-gold:focus { --tw-ring-color: #D4AF37; }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.contactService.submitForm(this.contactForm.value).subscribe({
        next: () => {
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}