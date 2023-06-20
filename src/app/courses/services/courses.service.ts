import { Injectable } from '@angular/core';
import { ICourse } from '../../core/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: ICourse[] = [
    {
      id: 1,
      title: 'Course 1',
      creationDate: '2023-05-24T15:26:09.842Z',
      duration: 88,
      topRated: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque aliquet elit venenatis dapibus. Fusce commodo hendrerit blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris porta porta nulla, vel dapibus quam cursus vel. Aliquam volutpat a nibh ultricies varius. Nulla nisl leo, sollicitudin sit amet dignissim in, malesuada efficitur nunc. Fusce in massa nec quam volutpat consectetur condimentum sit amet lorem. '
    },
    {
      id: 2,
      title: 'Course 2',
      creationDate: '2023-08-24T15:26:09.842Z',
      duration: 120,
      topRated: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque aliquet elit venenatis dapibus. Fusce commodo hendrerit blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris porta porta nulla, vel dapibus quam cursus vel. Aliquam volutpat a nibh ultricies varius. Nulla nisl leo, sollicitudin sit amet dignissim in, malesuada efficitur nunc. Fusce in massa nec quam volutpat consectetur condimentum sit amet lorem. '
    },
    {
      id: 3,
      title: 'Course 3',
      topRated: true,
      creationDate: '2023-06-10T15:26:09.842Z',
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque aliquet elit venenatis dapibus. Fusce commodo hendrerit blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris porta porta nulla, vel dapibus quam cursus vel. Aliquam volutpat a nibh ultricies varius. Nulla nisl leo, sollicitudin sit amet dignissim in, malesuada efficitur nunc. Fusce in massa nec quam volutpat consectetur condimentum sit amet lorem. '
    }
  ];

  getList(): ICourse[] {
    return this.courses;
  }

  createCourse(course: ICourse): void {
    this.courses.push(course);
  }

  getCourseById(courseId: number): ICourse | undefined {
    return this.courses.find((course) => course.id === courseId);
  }

  updateCourse(course: ICourse): void {
    const index = this.courses.findIndex((item) => item.id === course.id);
    if (index !== -1) {
      this.courses[index] = course;
    }
  }

  removeCourse(courseId: number): void {
    const index = this.courses.findIndex((item) => item.id === courseId);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}
