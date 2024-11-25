import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative h-screen flex items-center justify-center text-white">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-[url('https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center absolute inset-0 bg-fixed"></div>
      <div class="relative z-10 text-center px-4 max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
          Desarrollo web personalizado para
          <span class="text-gold">hacer crecer tu negocio</span>
        </h1>
        <p class="text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
          Creo sitios web modernos y funcionales que ayudan a impulsar tu presencia online
        </p>
        <div class="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
          <a href="#contact" 
             class="bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105">
            Contactar
          </a>
          <a href="#portfolio" 
             class="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105">
            Ver Proyectos
          </a>
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
export class HeroComponent {}