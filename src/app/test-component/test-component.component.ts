import { CommonModule } from '@angular/common';
import { Component,  ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  scrollToSection(section: string) {
    const sectionRefs: { [key: string]: ElementRef } = {
      about: this.aboutSection,
      services: this.servicesSection,
      contact: this.contactSection,
    };

    sectionRefs[section]?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
