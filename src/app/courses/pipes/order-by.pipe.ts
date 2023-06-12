import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../core/models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[], field: string, ascending: boolean): ICourse[] {
    if (!Array.isArray(courses)) {
      return courses;
    }

    return  courses.sort((a, b) => {
      const dateA = new Date(a[field]);
      const dateB = new Date(b[field]);
      return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  }

}
