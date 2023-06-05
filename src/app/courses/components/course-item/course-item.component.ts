import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '../../../core/models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})

export class CourseItemComponent implements OnInit {
  @Input() course!: ICourse;
  @Output() deletedCourseId = new EventEmitter<number>();
  creationDate!: Date;
  formattedDate!: string;

  ngOnInit() {
    if (this.course && this.course.creationDate) {
      this.creationDate = new Date(this.course.creationDate);
      this.formattedDate = this.creationDate.getMonth() + "/" + (this.creationDate.getDate()+1) + "/" + this.creationDate.getFullYear();
    }
  }

  edit(): void {
    console.log('Edit');
  }

  delete(): void {
    this.deletedCourseId.emit(this.course.id);
  }
}
