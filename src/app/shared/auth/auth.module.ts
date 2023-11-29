import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // Compoenents
  AuthComponent
    // Pipes
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: AuthComponent }]),

  ],
})
export class AuthModule {}
