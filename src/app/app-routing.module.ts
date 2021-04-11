import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';

import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/cardetail/cardetail.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/cardetail/:carId", pathMatch:"full", component:CarComponent},
  {path:"cars/colors/:colorId", pathMatch:"full", component:CarComponent},
  {path:"cars/add", component:CarAddComponent, canActivate: [LoginGuard]},
  {path:"login" ,  component:LoginComponent },
{
  path: 'car/:carId',
  pathMatch: 'full',
  component: CarDetailsComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
