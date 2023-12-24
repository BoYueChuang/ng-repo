import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(
    public _Http: HttpClient
  ) { }


  public addStudent(para: any): Observable<any> {
    return this._Http.post<any>(`http://localhost:8080/student/addStudent`, para)
  }
}