import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServiceCourse } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServiceCourse
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
