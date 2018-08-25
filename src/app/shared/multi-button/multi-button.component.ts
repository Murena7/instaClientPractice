import { Component, OnInit, Input } from '@angular/core';
import { ButtonType } from '../types/buttonType';

@Component({
  selector: 'app-multi-button',
  templateUrl: './multi-button.component.html',
  styleUrls: ['./multi-button.component.scss'],
})
export class MultiButtonComponent implements OnInit {
  constructor() {}

  @Input()
  buttonTypeParameters: ButtonType;

  ngOnInit() {}

  buttonToggler(buttonName: string) {
    this.buttonTypeParameters.className['button' + buttonName] = !this
      .buttonTypeParameters.className['button' + buttonName];
    this.buttonTypeParameters.className['button' + buttonName + '_active'] = !this
      .buttonTypeParameters.className['button' + buttonName + '_active'];
  }
}
