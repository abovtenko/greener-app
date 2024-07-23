import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Add this route
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'main', component: MainComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirect to login as default (optional)
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
