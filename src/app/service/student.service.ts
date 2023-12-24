import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  public url: string = "https://ngchillmanapi.vercel.app/";

  constructor(
    public _Http: HttpClient
  ) { }


  public addStudent(para: any): Observable<any> {
    return this._Http.post<any>(`${this.url}student/addStudent`, para);
  }

  public getStudent(): Observable<any> {
    return this._Http.get<any>(`${this.url}student/getStudent`);
  }
}
