import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [],
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent {

  @Output() scrollTo = new EventEmitter<string>();

  scrollToSection(section: string) {
    this.scrollTo.emit(section);
  }
  
}
