import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  document: any;

  viseOverflow(): void {
    document.body.style.overflow = 'hidden';
  }

  hideOverflow(): void {
    document.body.style.overflow = 'auto';
  }
}
