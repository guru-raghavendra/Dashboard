import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Authgurad } from './authgurad.service';
import { AuthguardLoginService } from './authguard-login.service';
import { EmailComponent } from './email/email.component';
import { ChatComponent } from './chat/chat.component';
import { TodoComponent } from './todo/todo.component';
import { CalenderComponent } from './calender/calender.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { EmailDraftComponent } from './email-draft/email-draft.component';
import { EmailStarredComponent } from './email-starred/email-starred.component';
import { EmailTrashComponent } from './email-trash/email-trash.component';
import { EmailSpamComponent } from './email-spam/email-spam.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    EmailComponent,
    ChatComponent,
    TodoComponent,
    CalenderComponent,
    ECommerceComponent,
    AnalyticsComponent,
    EmailInboxComponent,
    EmailSentComponent,
    EmailDraftComponent,
    EmailStarredComponent,
    EmailTrashComponent,
    EmailSpamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    // RouterModule.forRoot([
    //   {path: '',component:HomeComponent, canActivate:[Authgurad]},
    //   // {path: '',component:HomeComponent},
    //   {path: 'login',component:LoginComponent , canActivate:[AuthguardLoginService]},
    //   // {path: 'login',component:LoginComponent},
    //   {path: '**',component:NotfoundComponent},

    // ])

  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
