import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  collapseNav = false;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (window.pageYOffset > 60) {
      this.collapseNav = true;
    } else {
      this.collapseNav = false;
    }
  }

  ngOnInit() {}
}
