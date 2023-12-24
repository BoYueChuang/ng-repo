import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @BlockUI() blockUI: NgBlockUI;
  homeForm: FormGroup;

  get name() { return this.homeForm.get("name") as FormControl };
  get email() { return this.homeForm.get("email") as FormControl };


  constructor(
    public _Router: Router,
    public _StudentService: StudentService,
    public _FormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {

    this.homeForm = this._FormBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });

  }


  submit() {
    if (this.homeForm.valid) {
      this.blockUI.start();
      this._StudentService.addStudent(this.addStudentPara()).subscribe(res => {
        this._Router.navigateByUrl(`/profile/${res.newStudent._id}`);
        this.blockUI.stop();
      });
    } else {
      alert('資料輸入不完整');
    };

  }


  addStudentPara() {
    let para = {
      name: this.name.value,
      email: this.email.value
    };

    return para;
  }



}
