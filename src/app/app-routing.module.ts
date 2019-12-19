import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AverageComponent } from './average/average.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  // To redirect the app to automatically launch from the login page
  {path: '', redirectTo: "/login", pathMatch: "full"},
  {path: 'average', component: AverageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }