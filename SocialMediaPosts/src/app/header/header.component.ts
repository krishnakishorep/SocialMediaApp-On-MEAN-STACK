import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{
userIsAuthenticated = false;
private authListenerSubs: Subscription;

constructor(private authService: AuthService){}

ngOnInit(){
  this.userIsAuthenticated = this.authService.getIsAuth();
 this.authListenerSubs = this.authService.getAuthStatusListener()
 .subscribe( isAutheticated => {
   this.userIsAuthenticated = isAutheticated;
 });
}

onLogout(){
  this.authService.logout();
}

ngOnDestroy(){
  this.authListenerSubs.unsubscribe();
}

}
