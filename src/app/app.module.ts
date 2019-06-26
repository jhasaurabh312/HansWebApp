import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { 
  MatToolbarModule, 
  MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule ,
   MatStepperModule,
   MatInputModule,
   MatFormFieldModule
  } from '@angular/material';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { CentersComponent } from './pages/centers/centers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionComponent,
    CentersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
