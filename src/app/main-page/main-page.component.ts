import { Component, ElementRef, ViewChild  } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { SkillPageComponent } from '../skill-page/skill-page.component';
import { ExperiencePageComponent } from '../experience-page/experience-page.component';
import { CommonModule } from '@angular/common';
import { EducationPageComponent } from '../education-page/education-page.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,
            AboutPageComponent,
            SkillPageComponent,
            ExperiencePageComponent,
            EducationPageComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillSection') skillSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('educationSection') educationSection!: ElementRef;

  scrollToSection(section: string) {
    const sections: Record<string, ElementRef> = {
      about: this.aboutSection,
      skills: this.skillSection,
      experience: this.experienceSection,
      education: this.educationSection,
    };

    sections[section]?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
