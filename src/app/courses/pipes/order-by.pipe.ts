import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../core/models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(courses: ICourse[], field: keyof ICourse): ICourse[] {
    return courses.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        return dateA.getTime() - dateB.getTime();
      }

      return 0;
    });
  }
}
