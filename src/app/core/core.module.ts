import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, AuthModule]
})
export class CoreModule {}
