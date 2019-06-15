import { Component } from '@angular/core';
import { ServiceCourse } from './courses.service';

@Component({
    selector : 'courses',
    template : `
                <h2>{{ title }}</h2>
                <ul>
                    <li *ngFor="let course of courseList">
                        {{ course }}
                    </li>
                </ul>
                `
})

export class CourseComponent{
        title = "Course List"
        courseList;

        constructor(service: ServiceCourse){
            this.courseList = service.getAllCourses();
        }
}