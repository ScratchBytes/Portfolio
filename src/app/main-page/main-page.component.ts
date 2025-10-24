import { Component } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { SkillPageComponent } from '../skill-page/skill-page.component';
import { ExperiencePageComponent } from '../experience-page/experience-page.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboutPageComponent,
            SkillPageComponent,
            ExperiencePageComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

}
