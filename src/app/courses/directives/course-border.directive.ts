import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  @Input('appCourseBorder') creationDate!: Date;
  currentDate: Date = new Date();
  pastDate: Date = new Date();
  isFreshCourse: boolean = false;
  isUpcomingCourse: boolean = false;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.pastDate.setDate(this.currentDate.getDate() - 14);
    this.isFreshCourse = this.creationDate < this.currentDate && this.creationDate >= this.pastDate;
    this.isUpcomingCourse = this.creationDate > this.currentDate;

    if (this.isFreshCourse) {
      this.element.nativeElement.style.border = '4px solid green';
    } else if (this.isUpcomingCourse) {
      this.element.nativeElement.style.border = '4px solid blue';
    }
  }

}
