import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public getStudentData: any[] = [];

  constructor(
    public _Router: Router,
    public _StudentService: StudentService
  ) { }


  ngOnInit(): void {
    this.getStudent();
  }


  getStudent() {
    this._StudentService.getStudent().subscribe(res => {
      this.getStudentData = res.message;
      console.log(this.getStudentData);

    });
  }

}
