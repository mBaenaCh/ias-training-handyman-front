import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TechnicalDetailComponent } from './components/technical-detail/technical-detail.component';
import { HoursCalculatorComponent } from './components/hours-calculator/hours-calculator.component';
import { TechniciansListComponent } from './components/technicians-list/technicians-list.component';
import { RegisterServiceComponent } from './components/register-service/register-service.component';
import { TechnicianServicesComponent } from './components/technician-services/technician-services.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TechnicalDetailComponent,
    HoursCalculatorComponent,
    TechniciansListComponent,
    RegisterServiceComponent,
    TechnicianServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
