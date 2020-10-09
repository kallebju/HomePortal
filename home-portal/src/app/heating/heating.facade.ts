import { Injectable } from '@angular/core';

@Injectable()
export class HeatingFacadeService {
  heatingButtonToggled(status: boolean) {
    if (status === true) {
      // HTTP PUT turn_on_heating
    } else {
      // HTTP PUT turn_off heating
    }
  }
  getHeatingStatus(): boolean {
    // HTTP GET status
    return true;
  }
}
