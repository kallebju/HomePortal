import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeatingButtonService } from '../services/heating-button.service';

@Injectable()
export class HeatingFacadeService {
  private heatingStatus = new BehaviorSubject<boolean>(false);

  constructor(private heatingService: HeatingButtonService){
    this.heatingService.getHeatingStatus().subscribe(
      data => this.heatingStatus.next(data.heat), 
      error => console.log("An error has occured ", error))
  }
  
  heatingButtonToggled(status: boolean) {
    if (status === true) {
      // HTTP PUT turn_on_heating
      this.heatingService.turnHeatingOn().subscribe(
        error => console.log("An error has occured ", error)
      );
    } else {
      // HTTP PUT turn_off heating
      this.heatingService.turnHeatingOff().subscribe();
    }
  }
  getHeatingStatus() {
    console.log(this.heatingStatus)
    return this.heatingStatus.asObservable();
  }
}
