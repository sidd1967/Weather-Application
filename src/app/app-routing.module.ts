import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { WeatherUpdateComponent } from './weather-update/weather-update.component';
import { QuerySensorDataComponent } from './query-sensor-data/query-sensor-data.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'weather-update',
    component: WeatherUpdateComponent,
  },
  {
    path: 'query-sensor-data',
    component: QuerySensorDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
