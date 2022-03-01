import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Authgurad implements CanActivate {

  constructor(
	private router: Router, 
	private authService: AuthService) { }

  canActivate()
  {
	  // if(this.authService.loggedin ) return true;
		if(localStorage.getItem('loggedin')==='true') return true;
		this.router.navigate(['/login']);
		return false;
  }
}


