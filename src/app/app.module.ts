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
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule , MatStepperModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { CentersComponent } from './pages/centers/centers.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterTwoComponent } from './pages/register-two/register-two.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionComponent,
    CentersComponent,
    RegisterComponent,
    RegisterTwoComponent
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
    MatStepperModule,
    BrowserAnimationsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
