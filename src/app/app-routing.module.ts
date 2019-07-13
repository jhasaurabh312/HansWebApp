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
import { RegisterOneComponent } from './pages/register-one/register-one.component';
import { RegisterFourComponent } from './pages/register-four/register-four.component';
import { RegisterFiveComponent } from './pages/register-five/register-five.component';
import { RegisterThreeComponent } from './pages/register-three/register-three.component';
import { RegisterSixComponent } from './pages/register-six/register-six.component';
import { HistoryComponent } from './pages/history/history.component';



const routes: Routes = [
  {path : '' , component : LoginComponent , pathMatch : 'full' },
  {path : 'login' , component : LoginComponent },
  {path : 'register' , component : RegisterComponent },
  {path : 'register-one' , component : RegisterOneComponent },
  {path : 'register-two' , component : RegisterTwoComponent },
  {path : 'register-three' , component : RegisterThreeComponent },
  {path : 'register-four' , component : RegisterFourComponent },
  {path : 'register-five' , component : RegisterFiveComponent },
  {path : 'register-six' , component : RegisterSixComponent },
  {path : 'centers' , component :  CentersComponent},
  {path : 'subscription' , component : SubscriptionComponent },
  {path : 'onboarding' , component : OnboardingComponent },
  {path : 'recommended' , component : RecommendedComponent },
  {path : 'profile' , component : ProfileComponent },
  {path : 'history' , component : HistoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
