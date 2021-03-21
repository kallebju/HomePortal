import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { HeatingFacadeService } from '../../heating.facade';

@Component({
  selector: 'app-heating-control',
  templateUrl: './heating-control.component.html',
  styleUrls: ['./heating-control.component.sass'],
})
export class HeatingControlComponent implements OnInit {
  constructor(private heatingService: HeatingFacadeService, private changeDetector: ChangeDetectorRef) {}
  @Output() heatingStatus;

  ngOnInit(): void {
    this.heatingService.getHeatingStatus().subscribe(status => this.heatingStatus = status);
  }
  onHeatingToggle(event: MatSlideToggleChange) {
    this.heatingService.heatingButtonToggled(event.checked);
    this.changeDetector.detectChanges();
  }
}
