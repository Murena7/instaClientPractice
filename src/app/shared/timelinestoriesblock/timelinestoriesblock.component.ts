import { Component, OnInit, Input, HostListener } from '@angular/core';
import { OwnerData } from '../types/ownerData';

@Component({
  selector: 'app-timelinestoriesblock',
  templateUrl: './timelinestoriesblock.component.html',
  styleUrls: ['./timelinestoriesblock.component.scss']
})
export class TimelinestoriesblockComponent implements OnInit {
  fixeBlock = false;

  constructor() { }

  @Input() ownerData: OwnerData;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (window.pageYOffset > 60) {
      this.fixeBlock = true;
    } else {
      this.fixeBlock = false;
    }
  }

  ngOnInit() {
  }

}
