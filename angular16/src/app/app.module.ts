import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { GuestLayoutComponent } from './Component/guest-layout/guest-layout.component';
import { ProtectedLayoutComponent } from './Component/protected-layout/protected-layout.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { TransactionPageComponent } from './Pages/transaction-page/transaction-page.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { LogisticsCreateComponent } from './Pages/logistics-create/logistics-create.component';
import { UserInterceptor } from './Services/user.interceptor';
import { TransactionReducer } from './Store/Transaction.Reducer';
import { TransactionEffects } from './Store/Transaction.Effects';
import { LogisticsEditComponent } from './Pages/logistics-edit/logistics-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    GuestLayoutComponent,
    ProtectedLayoutComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    ProfilePageComponent,
    TransactionPageComponent,
    ErrorPageComponent,
    LogisticsCreateComponent,
    LogisticsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({'transaction':TransactionReducer}, {}),
    EffectsModule.forRoot([TransactionEffects]),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
