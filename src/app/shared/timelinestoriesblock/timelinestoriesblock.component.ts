import { Component, OnInit, Input } from '@angular/core';
import { OwnerData } from '../types/ownerData';

@Component({
  selector: 'app-timelinestoriesblock',
  templateUrl: './timelinestoriesblock.component.html',
  styleUrls: ['./timelinestoriesblock.component.scss']
})
export class TimelinestoriesblockComponent implements OnInit {

  constructor() { }

  @Input() ownerData: OwnerData;

  ngOnInit() {
  }

}
