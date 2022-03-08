import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

	mobileQuery: MediaQueryList | undefined;
	private _mobileQueryListener: () => void;

	open=true;

	constructor(
		changeDetectorRef: ChangeDetectorRef, 
		media: MediaMatcher
	) 
	{
		this.mobileQuery = media.matchMedia('(max-width: 800px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit(): void {
	}

	
	ngOnDestroy(): void {
		if(this.mobileQuery)
			this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	menter(e:Event)
	{
		//console.log('hello')
		console.log(e)
		
	}
	




}
