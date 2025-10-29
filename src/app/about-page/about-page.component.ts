import { Component, HostListener, EventEmitter, Output } from '@angular/core';
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
  currentAvatar: string = 'assets/about-page/Avatar1.png';
  currentAvatarId = 'Avatar1';
  isScrolled1 = false;
  isTyping = true;
  loading = false;
  progress = 0;
  isCircle = false;
  isComplete = false;
  isReturning = false;

  @Output() scrollTo = new EventEmitter<string>();

  onScrollTo(section: string) {
    this.scrollTo.emit(section); // re-emit event to main-page
  }

  getLetters(text: string): string[] {
    return text.split('');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.isScrolled1 = scrollY > 200;

    if (scrollY > 300) {
      this.currentAvatar = 'assets/about-page/Avatar4.png';
      this.currentAvatarId = 'Avatar4';
    } else if (scrollY > 200) {
      this.currentAvatar = 'assets/about-page/Avatar3.png';
      this.currentAvatarId = 'Avatar3';
    } else if (scrollY > 50) {
      this.currentAvatar = 'assets/about-page/Avatar2.png';
      this.currentAvatarId = 'Avatar2';
    } else {
      this.currentAvatar = 'assets/about-page/Avatar1.png';
      this.currentAvatarId = 'Avatar1';
    }
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

  startLoading() {
    this.loading = true;
    this.progress = 0;
    this.isCircle = false;
    this.isComplete = false;
    this.isReturning = false;

    const interval = setInterval(() => {
      this.progress += 15;

      if (this.progress >= 100) {
        clearInterval(interval);
        this.progress = 100;

        // Step 1: morph into circle
        setTimeout(() => {
          this.isCircle = true;

          // Step 2: show checkmark
          setTimeout(() => {
            this.isComplete = true;

            // Step 3: morph back to square
            setTimeout(() => {
              this.isReturning = true;
              this.isCircle = false;
              this.isComplete = false;

              // Step 4: show button again
              setTimeout(() => {
                this.loading = false;
                this.isReturning = false;
              }, 700);
            }, 1300);
          }, 600);
        }, 400);
      }
    }, 100);
  }

}
