import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  //templateUrl: './button.component.html',
  template: `<button [ngStyle]="{'background-color': color}">{{label}} </button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color!: string;
  @Input() label!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
