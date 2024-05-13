import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected-layout',
  templateUrl: './protected-layout.component.html',
  styleUrls: ['./protected-layout.component.css']
})
export class ProtectedLayoutComponent {
  constructor(private router: Router){

  }
  handleLogout(){
    window.alert('Successfully sign out');
    this.router.navigate(['/']);
    return sessionStorage.removeItem('token');
  }
}
