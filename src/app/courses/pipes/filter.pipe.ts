import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../core/models/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: ICourse[], searchTerm: string): ICourse[] {
    if (!Array.isArray(courses) || !searchTerm) {
      return courses;
    }

    return courses.filter(course => {
      return course.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
