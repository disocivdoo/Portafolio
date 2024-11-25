import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">
            Portafolio
          </h2>
          <p class="text-gray-600" data-aos="fade-up" data-aos-delay="200">
            Algunos ejemplos de proyectos web que podria desarrollar:
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects; let i = index"
               class="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300" 
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 200">
            <img [src]="project.image" [alt]="project.title" 
                 class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 flex flex-col justify-center p-6">
              <h3 class="text-xl font-bold mb-2 text-white">{{project.title}}</h3>
              <p class="text-gray-300 mb-4">{{project.description}}</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of project.technologies" 
                      class="text-xs bg-gold text-black px-2 py-1 rounded">
                  {{tech}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-gold {
      background-color: #D4AF37;
    }
  `]
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Blog Personal',
      description: 'Blog minimalista con sistema de gestión de contenidos',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      category: 'Blog',
      technologies: ['Angular', 'Firebase']
    },
    {
      title: 'Portafolio Fotógrafo',
      description: 'Galería de fotos con diseño elegante',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
      category: 'Portafolio',
      technologies: ['React', 'Tailwind']
    },
    {
      title: 'Landing Page',
      description: 'Página de aterrizaje para producto digital',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      category: 'Landing',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Barberias',
      description: 'Pagina con reservas, ideal para barberias',
      image: 'https://images.unsplash.com/photo-1678356164573-9a534fe43958?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Reservas',
      technologies: ['Angular', 'Firebase']
    },
    {
      title: 'Pequeñas tiendas',
      description: 'Pagina ideal para ventas a pequeñas escala',
      image: 'https://images.unsplash.com/photo-1688561807971-728cd39eb71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Venta',
      technologies: ['React', 'Tailwind']
    }
  ];
}