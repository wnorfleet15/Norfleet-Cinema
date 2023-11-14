import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NowPlayingComponent } from '../now-playing/now-playing.component';

@NgModule({
  declarations: [
    // Components
    NowPlayingComponent,],

  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
})
export class SharedModule {}
