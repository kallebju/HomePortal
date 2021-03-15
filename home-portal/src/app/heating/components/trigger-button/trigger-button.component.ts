import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-trigger-button',
  templateUrl: './trigger-button.component.html',
  styleUrls: ['./trigger-button.component.sass'],
})
export class TriggerButtonComponent implements OnInit {
  @Input() heatingActive: boolean;
  @Output() buttonToggled: EventEmitter<
    MatSlideToggleChange
  > = new EventEmitter<MatSlideToggleChange>();

  constructor() {}

  ngOnInit(): void {}
  onButtonToggle(event: MatSlideToggleChange) {
    this.buttonToggled.emit(event);
  }
  
}
