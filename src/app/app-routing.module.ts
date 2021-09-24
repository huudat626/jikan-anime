import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { // default route => /home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:"search/:term",
    component: AppComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
