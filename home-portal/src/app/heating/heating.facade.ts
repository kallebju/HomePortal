import { Injectable } from '@angular/core';
import { HeatingButtonService } from '../services/heating-button.service';

@Injectable()
export class HeatingFacadeService {
  constructor(private heatingService: HeatingButtonService){}
  heatingButtonToggled(status: boolean) {
    if (status === true) {
      // HTTP PUT turn_on_heating
      this.heatingService.turnHeatingOn().subscribe();
    } else {
      // HTTP PUT turn_off heating
      this.heatingService.turnHeatingOff().subscribe();
    }
  }
  getHeatingStatus(): boolean {
    // HTTP GET status
    return true;
  }
}
