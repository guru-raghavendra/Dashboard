import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent  {

	hide = true;
	error=false;
	remember=false;
	email:string = '' ;
	password:string = '';
	invaliduser=false;
	disable=true;
	

	constructor(
		private router: Router, 
		private authService: AuthService) { }
	
	onchange(x:any)
	{
		// console.log(x);
		// console.log(!x.valid); 
		// console.log(x.dirty)
		this.error= x.dirty && !x.valid;
		if(this.error)
		{
			this.disable=true;
		}
		
		this.email = x.value;
		// console.log(this.error);
	}

	saveRem(x:any)
	{
		this.remember= x.value;
	}
	savepass(x:any){
		this.disable = this.error;
		this.password=x.value;
	}
	submit(){
		let user = {
		email : this.email,
		password :  this.password,
		remember: this.remember
		}
		// console.log(user)
		
		let v =this.authService.login(user);
		// console.log(v);
		if(v)
		{
			this.router.navigate(['/dashboard/e-commerce']);
		}
		else{
			this.invaliduser = true;
		}
		
	}


	
	ngOnDestroy(): void {
		if(!this.authService.remember)
		{
			localStorage.removeItem('user')
		}
	}
}

