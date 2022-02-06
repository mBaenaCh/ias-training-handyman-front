import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TechnicalDetailComponent } from './components/technical-detail/technical-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'technician'},
  {path: 'technician', component: HomePageComponent},
  {path: 'technician/:id', component: TechnicalDetailComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
