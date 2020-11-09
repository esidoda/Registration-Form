import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  
  {
      path: '',
      redirectTo: 'landing-page',
      pathMatch: 'full'
  },
  {
      path: 'register',
      component: RegisterComponent
  },
  {
      path: 'landing-page',
      component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
