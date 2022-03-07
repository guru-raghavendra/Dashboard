import { ChangeDetectorRef, Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	mobileQuery: MediaQueryList | undefined;

	open=true;
	current="e-commerce";
	dropDash=true;
	userOpt=false;
	str:string='/dashboard';
	

	private _mobileQueryListener: () => void;

	constructor(
		private router: Router, 
		private authService: AuthService,
		changeDetectorRef: ChangeDetectorRef, 
		media: MediaMatcher) 
	{
		this.mobileQuery = media.matchMedia('(max-width: 1024px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit(): void {
	}

	logout()
	{
		localStorage.clear();
		this.router.navigate(['/login']);

	}
	// onchange()
	// {
	// 	const cur=this.str+'/'+this.current;
	// 	this.router.navigate([cur])
	// }
	
	ngOnDestroy(): void {
		if(this.mobileQuery)
			this.mobileQuery.removeListener(this._mobileQueryListener);
	  }

}
