import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: ICourse[];

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: "Video Course 1",
        creationDate: "2023-05-24T15:26:09.842Z",
        duration: "1h 28min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque aliquet elit venenatis dapibus. Fusce commodo hendrerit blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris porta porta nulla, vel dapibus quam cursus vel. Aliquam volutpat a nibh ultricies varius. Nulla nisl leo, sollicitudin sit amet dignissim in, malesuada efficitur nunc. Fusce in massa nec quam volutpat consectetur condimentum sit amet lorem. "
      },
      {
        id: 2,
        title: "Video Course 2",
        creationDate: "2023-05-24T15:26:09.842Z",
        duration: "1h 28min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque aliquet elit venenatis dapibus. Fusce commodo hendrerit blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris porta porta nulla, vel dapibus quam cursus vel. Aliquam volutpat a nibh ultricies varius. Nulla nisl leo, sollicitudin sit amet dignissim in, malesuada efficitur nunc. Fusce in massa nec quam volutpat consectetur condimentum sit amet lorem. "
      },
      {
        id: 3,
        title: "Video Course 3",
        creationDate: "2023-05-24T15:26:09.842Z",
        duration: "1h 28min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque aliquet elit venenatis dapibus. Fusce commodo hendrerit blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris porta porta nulla, vel dapibus quam cursus vel. Aliquam volutpat a nibh ultricies varius. Nulla nisl leo, sollicitudin sit amet dignissim in, malesuada efficitur nunc. Fusce in massa nec quam volutpat consectetur condimentum sit amet lorem. "
      },
    ];
  }

  loadMore(): void {
    console.log('Load more');
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter(item => item.id !== id);
  }

  trackByFn(index: number) {
    return index;
  }
}
