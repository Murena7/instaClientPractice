import { Component, OnInit, Input } from '@angular/core';
import { OwnerData } from '../types/ownerData';

@Component({
  selector: 'app-miniuserblock',
  templateUrl: './miniuserblock.component.html',
  styleUrls: ['./miniuserblock.component.scss']
})
export class MiniuserblockComponent implements OnInit {

  constructor() { }

  @Input() ownerData: OwnerData;
  @Input() stories: boolean;

  ngOnInit() {
  }

}
