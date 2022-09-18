import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

 
  course:Course;

  constructor(){
    this.course=new Course();
  }

  ngOnInit():void  {
   
  }

  addCourse(){
    
  }

  

}
