import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent }      from './landing-page/landing-page.component';
import { MyRoutesComponent }      from './my-routes/my-routes.component';
import { ToDoListComponent }      from './to-do-list/to-do-list.component';
import { LoginComponent }      from './login/login.component';

const routes: Routes = [
  { path: '/', component: LandingPageComponent },
  { path: 'myRoutes', component: MyRoutesComponent },
  { path: 'toDoList', component: ToDoListComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}