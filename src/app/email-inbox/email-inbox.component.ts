import { EmailRenderService } from './../email-render.service';
import { Component, OnInit } from '@angular/core';


interface emailInterface{
	name:string;
	email:string;
	subject:string;
	body:string;
}



@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})

export class EmailInboxComponent implements OnInit {

	emails:Array<emailInterface>;
	open_content=false;
	
	mail:emailInterface;

	constructor(
		mailservice:EmailRenderService
	) 
	{ 
		this.emails=mailservice.inbox();
		// let temp=this.emails[0] 
		// console.log((temp["name"]));
		this.mail=this.emails[0];
	}

	ngOnInit(): void {
	}

	

	disp(mail:emailInterface){
		this.open_content=!this.open_content
		this.mail=mail
		// this.mail=JSON.parse(mail);
		// this.mail['body']=JSON.parse(this.mail['body']);
		// console.log(JSON.stringify(this.mail['body']))
		
	}

}
