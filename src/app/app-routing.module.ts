import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Redirect to Home page
  { path: 'Home', component: HomepageComponent },
  // Add more routes as needed
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
