import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [HeaderLayoutComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
