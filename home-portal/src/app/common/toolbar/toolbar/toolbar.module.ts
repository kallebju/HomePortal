import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  providers: [],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
