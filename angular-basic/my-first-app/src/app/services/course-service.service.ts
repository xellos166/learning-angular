import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course.model';
import { AppRoutingModule } from '../routing/app-routing/app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private httpClient:HttpClient,private routerService:AppRoutingModule) { }

  getAllCourses():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${environment.localJsonServer}/courses`);
  }
}
