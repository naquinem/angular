import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './Component/guest-layout/guest-layout.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ProtectedLayoutComponent } from './Component/protected-layout/protected-layout.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { TransactionPageComponent } from './Pages/transaction-page/transaction-page.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { LogisticsCreateComponent } from './Pages/logistics-create/logistics-create.component';
import { LogisticsEditComponent } from './Pages/logistics-edit/logistics-edit.component';
import { authGuard } from './Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        title: 'Home Page'
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        title: 'Contact Us Page'
      },
      {
        path: 'about',
        component: AboutPageComponent,
        title: 'About Us Page'
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        title: 'Sign In'
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'sign-up'
      }
    ]
  },
  {
    path: 'protected',
    component: ProtectedLayoutComponent,
    children: [
      {
        path: '',
        component: ProfilePageComponent,
        title: 'Profile Page',
        canActivate: ([authGuard])
      },
      {
        path: 'transaction',
        component: TransactionPageComponent,
        title: 'Transaction Page',
        canActivate: ([authGuard])
      },
      {
        path: 'logistics',
        component: LogisticsCreateComponent,
        title: 'Logistics Create Page',
        canActivate: ([authGuard])
      },
      {
        path: 'logistics/edit/:id',
        component: LogisticsEditComponent,
        title: 'Logistics Edit Page',
        canActivate: ([authGuard])
      }
    ]
  },
  {
    path: '**',
    component: ErrorPageComponent,
    title: 'Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
