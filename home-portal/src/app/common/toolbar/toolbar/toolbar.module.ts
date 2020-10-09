import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ToolbarComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  providers: [],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
