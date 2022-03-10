import { Injectable } from '@angular/core';
import mailList from '../assets/email.json'; // This import style requires "esModuleInterop", see "side notes"

@Injectable({
  providedIn: 'root'
})
export class EmailRenderService {

  obj=
    { 
      "name":"test",
      "email":"test@yellowpages.com",
      "subject":"t 😊",
      "body":"temp"
  } 
  
  inbox()
  {
   
	  return mailList["inbox"];
  }
  sent()
  {
    
    // mailList["sent"].unshift(this.obj)
    
    return mailList["sent"];
  }

  addToSent(x:any)
  {
    mailList["sent"].unshift(x)
  }
  
  constructor() { }
}
