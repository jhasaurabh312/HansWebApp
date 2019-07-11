import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule , MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCardModule,MatTabsModule,MatSelectModule} from '@angular/material';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { CentersComponent } from './pages/centers/centers.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterTwoComponent } from './pages/register-two/register-two.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { RecommendedComponent } from './pages/recommended/recommended.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterThreeComponent } from './pages/register-three/register-three.component';
import { RegisterFourComponent } from './pages/register-four/register-four.component';
import { RegisterFiveComponent } from './pages/register-five/register-five.component';
import { RegisterSixComponent } from './pages/register-six/register-six.component';
import { RegisterOneComponent } from './pages/register-one/register-one.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionComponent,
    CentersComponent,
    RegisterComponent,
    RegisterTwoComponent,
    OnboardingComponent,
    RecommendedComponent,
    ProfileComponent,
    RegisterThreeComponent,
    RegisterFourComponent,
    RegisterFiveComponent,
    RegisterSixComponent,
    RegisterOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,            
    MatDatepickerModule,        
    MatNativeDateModule,
    MatInputModule ,
    MatToolbarModule,
    MatButtonModule ,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    // AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
