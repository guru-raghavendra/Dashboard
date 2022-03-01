import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  remember:boolean=false;
  loggedin=false;
  constructor() { }

  //   Admin: admin@demo.com | admin

  // Client: client@demo.com | client
  login(credentials:{email:string,password:string,remember:boolean })
  {
	
	if(credentials.email==='admin@demo.com' && credentials.password==='admin' )
	{
		localStorage.setItem('user', "admin");
		this.remember=credentials.remember;
    	// this.loggedin=true;
		localStorage.setItem('loggedin', 'true');
		return true;
	}
	if(credentials.email==='client@demo.com' && credentials.password==='client' )
	{
		localStorage.setItem('user', "client");
		this.remember=credentials.remember;
    	// this.loggedin=true;
		localStorage.setItem('loggedin', 'true');
		return true;
	}
	return false;
  }
}
