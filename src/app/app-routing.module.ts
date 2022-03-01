import { TodoComponent } from './todo/todo.component';
import { EmailComponent } from './email/email.component';
import { ChatComponent } from './chat/chat.component';
import { CalenderComponent } from './calender/calender.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardLoginService } from './authguard-login.service';
import { Authgurad } from './authgurad.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
	{ path: 'dashboard',   redirectTo: 'dashboard/e-commerce', pathMatch: 'full' },

	{	path: 'dashboard',component:HomeComponent, canActivate:[Authgurad],
		children: [ { path: 'e-commerce', component:ECommerceComponent },
					{ path: 'analytics', component:AnalyticsComponent },
					{ path: 'calender', component:CalenderComponent },
					{ path: 'chat', component:ChatComponent },
					{ path: 'email', component:EmailComponent },
					{ path: 'todo', component:TodoComponent }
				  ]
	},
	{ path: '',   redirectTo: 'dashboard/e-commerce', pathMatch: 'full' },
	

	{path: 'login',component:LoginComponent , canActivate:[AuthguardLoginService]},
	// {path: 'login',component:LoginComponent},
	{path: '**',component:NotfoundComponent},

	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
