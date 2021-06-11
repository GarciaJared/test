import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomneComponent } from './homne/homne.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  {path: '', component: HomneComponent, pathMatch: "full"},
  {path: 'homne', component: HomneComponent, pathMatch: "full"},
  {path: 'users', component: UsersComponent, pathMatch:"full"},
  {path: 'login', component: LoginComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
