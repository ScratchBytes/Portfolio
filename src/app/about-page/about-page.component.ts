import { Component, HostListener  } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule,
            HeaderLayoutComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  firstParagraph: string = 'hello';
  secondParagraph: string = "i'm";
  thirdParagraph: string = 'kristian';
  isScrolled = false;
  isTyping = true;

  getLetters(text: string): string[] {
    return text.split('');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.isScrolled = scrollY > 100;
  }

  onAnimationEnd(event: AnimationEvent) {

    if (event.animationName.includes('deleting')) {
      console.log("End")
      setTimeout(() => {
        this.isTyping = false;
        setTimeout(() => {
          console.log("Reset")
          this.isTyping = true;
        }, 10);
      }, 6000);
    }

  }

}
