import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CentersComponent } from './pages/centers/centers.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterTwoComponent } from './pages/register-two/register-two.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { RecommendedComponent } from './pages/recommended/recommended.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {path : '' , component : LoginComponent , pathMatch : 'full' },
  {path : 'login' , component : LoginComponent },
  {path : 'register' , component : RegisterComponent },
  {path : 'register-two' , component : RegisterTwoComponent },
  {path : 'centers' , component :  CentersComponent},
  {path : 'subscription' , component : SubscriptionComponent },
  {path : 'onboarding' , component : OnboardingComponent },
  {path : 'recommended' , component : RecommendedComponent },
  {path : 'profile' , component : ProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
