import { Component } from '@angular/core';
import { ICourse } from './core/models/course';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredCourses: ICourse[] = [];

  constructor(private authService: AuthService) {
  }

  handleFilteredCourses(courses: ICourse[]): void {
    this.filteredCourses = courses;
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
