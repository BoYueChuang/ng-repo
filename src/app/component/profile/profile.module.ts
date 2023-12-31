import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    BlockUIModule.forRoot({
      message: ''
    })
  ]
})
export class ProfileModule { }
