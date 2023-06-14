import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  @Input('appCourseBorder') creationDate!: Date;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const currentDate: Date = new Date();
    const pastDate: Date = new Date();

    pastDate.setDate(currentDate.getDate() - 14);
    const isFreshCourse =
      this.creationDate < currentDate && this.creationDate >= pastDate;
    const isUpcomingCourse = this.creationDate > currentDate;

    if (isFreshCourse) {
      this.element.nativeElement.style.border = '4px solid green';
    } else if (isUpcomingCourse) {
      this.element.nativeElement.style.border = '4px solid blue';
    }
  }
}
