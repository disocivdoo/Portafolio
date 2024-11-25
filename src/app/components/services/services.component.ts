import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCode, faMobile, faSearch, faGlobe 
} from '@fortawesome/free-solid-svg-icons';

interface Service {
  icon: any;
  title: string;
  description: string;
  delay: number;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="services" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">
            Servicios
          </h2>
          <p class="text-gray-600" data-aos="fade-up" data-aos-delay="200">
            Ofrezco soluciones web adaptadas a tus necesidades
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let service of services" 
               class="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="service.delay">
            <div class="inline-block p-4 rounded-full bg-gold bg-opacity-10 mb-6">
              <fa-icon [icon]="service.icon" class="text-4xl text-gold"></fa-icon>
            </div>
            <h3 class="text-xl font-bold mb-4">{{service.title}}</h3>
            <p class="text-gray-600">{{service.description}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-gold {
      color: #D4AF37;
    }
    .bg-gold {
      background-color: #D4AF37;
    }
  `]
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: faCode,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y funcionales hechos a medida',
      delay: 0
    },
    {
      icon: faMobile,
      title: 'Diseño Responsive',
      description: 'Tu sitio perfecto en cualquier dispositivo',
      delay: 200
    },
    {
      icon: faSearch,
      title: 'SEO Básico',
      description: 'Optimización para mejorar tu visibilidad en Google',
      delay: 400
    },
    {
      icon: faGlobe,
      title: 'Mantenimiento',
      description: 'Actualizaciones y soporte para tu sitio web',
      delay: 600
    }
  ];
}