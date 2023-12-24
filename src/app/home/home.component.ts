import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeForm: FormGroup;

  get lastName() { return this.homeForm.get("lastName") as FormControl };
  get firstName() { return this.homeForm.get("firstName") as FormControl };
  get email() { return this.homeForm.get("email") as FormControl };


  constructor(
    public _StudentService: StudentService,
    public _FormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {

    this.homeForm = this._FormBuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });

  }


  submit() {
    if (this.homeForm.valid) {
      this._StudentService.addStudent(this.addStudentPara()).subscribe(res => { });
    } else {
      alert('資料輸入不完整');
    };

  }


  addStudentPara() {
    let para = {
      lastName: this.lastName.value,
      firstName: this.firstName.value,
      email: this.email.value
    };

    return para;
  }



}
