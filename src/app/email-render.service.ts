import { Injectable } from '@angular/core';
import mailList from '../assets/email.json'; // This import style requires "esModuleInterop", see "side notes"

@Injectable({
  providedIn: 'root'
})
export class EmailRenderService {

  inbox()
  {
	  return mailList["inbox"];
  }
  constructor() { }
}
