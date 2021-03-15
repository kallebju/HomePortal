import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { HeatingFacadeService } from '../../heating.facade';

@Component({
  selector: 'app-heating-control',
  templateUrl: './heating-control.component.html',
  styleUrls: ['./heating-control.component.sass'],
})
export class HeatingControlComponent implements OnInit {
  constructor(private heatingService: HeatingFacadeService, private changeDetector: ChangeDetectorRef) {}
  heatingStatus;

  ngOnInit(): void {
    this.heatingStatus = this.heatingService.getHeatingStatus();
  }
  onHeatingToggle(event: MatSlideToggleChange) {
    this.heatingService.heatingButtonToggled(event.checked);
    this.changeDetector.detectChanges();
  }
}
