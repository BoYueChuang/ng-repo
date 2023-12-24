import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  getStudentDetailData: any = {};

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    public _StudentService: StudentService
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.getStudentDetail(params['id']);
    });
  }

  getStudentDetail(id: string) {
    this._StudentService.getStudentDetail(id).subscribe(res => {
      this.getStudentDetailData = res.message;
    });
  }

}
