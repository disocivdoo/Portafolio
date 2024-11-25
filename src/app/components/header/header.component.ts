import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class]="headerClass">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold text-gold">
          <span class="text-white">Digital</span>Studio
        </div>
        <div class="md:hidden">
          <button (click)="toggleMenu()" class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    [attr.d]="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"/>
            </svg>
          </button>
        </div>
        <ul class="hidden md:flex space-x-8">
          <li><a href="#home" class="nav-link">Inicio</a></li>
          <li><a href="#services" class="nav-link">Servicios</a></li>
          <li><a href="#portfolio" class="nav-link">Portafolio</a></li>
          <li><a href="#about" class="nav-link">Sobre Nosotros</a></li>
          <li><a href="#contact" class="nav-link">Contacto</a></li>
        </ul>
      </nav>
      <!-- Mobile menu -->
      <div [class]="'md:hidden ' + (isMenuOpen ? 'block' : 'hidden')" 
           class="absolute top-full left-0 right-0 bg-black bg-opacity-90">
        <ul class="px-6 py-4 space-y-4">
          <li><a href="#home" class="nav-link block" (click)="closeMenu()">Inicio</a></li>
          <li><a href="#services" class="nav-link block" (click)="closeMenu()">Servicios</a></li>
          <li><a href="#portfolio" class="nav-link block" (click)="closeMenu()">Portafolio</a></li>
          <li><a href="#about" class="nav-link block" (click)="closeMenu()">Sobre Nosotros</a></li>
          <li><a href="#contact" class="nav-link block" (click)="closeMenu()">Contacto</a></li>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
    .text-gold {
      color: #D4AF37;
    }
    .nav-link {
      @apply text-white hover:text-gold transition-colors duration-300;
    }
    .header-scrolled {
      @apply fixed w-full bg-black shadow-lg transition-all duration-300 ease-in-out z-50;
      background-color: rgba(0, 0, 0, 0.9);
    }
    .header-top {
      @apply fixed w-full transition-all duration-300 ease-in-out z-50;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;
  headerClass = 'header-top';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.headerClass = 'header-scrolled';
    } else {
      this.headerClass = 'header-top';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}