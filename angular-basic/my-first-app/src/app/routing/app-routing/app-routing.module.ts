import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from 'src/app/component/course/add-course/add-course.component';
import { DisplayCourseComponent } from 'src/app/component/course/display-course/display-course.component';
const routes: Routes = [

  { path: 'display-course', component: DisplayCourseComponent },
  { path: 'add-course', component: AddCourseComponent }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
