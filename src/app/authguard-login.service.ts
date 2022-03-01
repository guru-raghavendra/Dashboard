import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardLoginService implements CanActivate {

	constructor(
		private router: Router, 
		private authService: AuthService) { }

	canActivate()
	{
		if(localStorage.getItem('loggedin')==='true')
		{
			this.router.navigate(['/dashboard']);
			return false;
		}
		return true;
	}
}

