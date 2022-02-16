import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';

const routes: Routes = [
  {path:'moviedashboard',component: MovieDashboardComponent
  ,canActivate: [AuthGuard]},
  { path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
