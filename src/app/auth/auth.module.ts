import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // Compoenents
  AuthComponent
    // Pipes
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),

  ],
})
export class AuthModule {}
