import { NgModule } from '@angular/core';

import { TriggerButtonComponent } from './components/trigger-button/trigger-button.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeatingFacadeService } from './heating.facade';
import { HeatingControlComponent } from './containers/heating-control/heating-control.component';

@NgModule({
  declarations: [TriggerButtonComponent, HeatingControlComponent],
  imports: [MatSlideToggleModule],
  providers: [HeatingFacadeService],
  exports: [TriggerButtonComponent, HeatingControlComponent],
})
export class HeatingModule {}
