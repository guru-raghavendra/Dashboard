import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'v1';
  constructor(
		private authService: AuthService) { }

    ngOnDestroy(): void {
		// if(!this.authService.remember)
		// {
		//   // if(!this.authService.remember)
		//   //   this.authService.loggedin=false;
		//   localStorage.setItem('loggedin', 'false');
		// }
		
		if(localStorage.getItem('user'))
		{

		}
		else
		{
			localStorage.removeItem('loggedin');
			localStorage.setItem('loggedin', 'false');
		}
    }
}
