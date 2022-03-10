import { EmailRenderService } from './../email-render.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

	mobileQuery: MediaQueryList | undefined;
	private _mobileQueryListener: () => void;

	open=true;

	compose_mail_open=false;

	disable=true;

	

	

	constructor(
		changeDetectorRef: ChangeDetectorRef, 
		media: MediaMatcher,
		private emailRenderService:EmailRenderService 
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

	// menter(e:Event)
	// {
	// 	//console.log('hello')
	// 	console.log(e)
		
	// }
	
	submit(f: any)
	{

		
		console.log(f);
		console.log(f.value["email-to"]);
		this.compose_mail_open=false;

		this.emailRenderService.addToSent({"name":f.value["email-to"], "email":f.value["email-to"],"subject":f.value["email-subject"],"body":f.value["email-body"]});
		f.reset();
	}

	onChange(x:any)
	{
		if(x.valid)
		{
			this.disable=false;
		}
		else
		{
			this.disable=true;
		}
	}




}
