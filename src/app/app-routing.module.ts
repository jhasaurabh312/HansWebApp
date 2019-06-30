import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CentersComponent } from './pages/centers/centers.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterTwoComponent } from './pages/register-two/register-two.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';


const routes: Routes = [
  {path : '' , component : OnboardingComponent , pathMatch : 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
