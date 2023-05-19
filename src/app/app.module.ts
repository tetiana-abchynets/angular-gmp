import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './components/section/section.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourceComponent } from './components/courses-list/cource/cource.component';
import { UserInfoComponent } from './components/header/user-info/user-info.component';
import { SearchComponent } from './components/section/search/search.component';
import { NewCourceComponent } from './components/section/new-cource/new-cource.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CoursesListComponent,
    CourceComponent,
    UserInfoComponent,
    SearchComponent,
    NewCourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
