import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./component/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./component/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
