import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';
  courses = [1,2];
  viewMode = 'someThingElse';
  students = [
    {id: 1, name: 'student1'},
    {id: 2, name: 'student2'},
    {id: 3, name: 'student3'}
  ]

  onAdd(){
    this.students.push({id : 4, name : 'student4'});
  }

  onRemove(student){
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
}
