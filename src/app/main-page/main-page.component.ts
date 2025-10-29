import { Component, ElementRef, ViewChild  } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { SkillPageComponent } from '../skill-page/skill-page.component';
import { ExperiencePageComponent } from '../experience-page/experience-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,
            AboutPageComponent,
            SkillPageComponent,
            ExperiencePageComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillSection') skillSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;

  scrollToSection(section: string) {
    const sections: Record<string, ElementRef> = {
      about: this.aboutSection,
      skills: this.skillSection,
      experience: this.experienceSection,
    };

    sections[section]?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
