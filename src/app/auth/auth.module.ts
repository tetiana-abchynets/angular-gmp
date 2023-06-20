import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent,
    IfAuthenticatedDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent,
    IfAuthenticatedDirective
  ]
})
export class AuthModule { }
