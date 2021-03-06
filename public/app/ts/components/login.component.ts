/// <reference path="../../../../typings/tsd.d.ts" />

import { Component } 											from 'angular2/core';
import { NgForm }    											from 'angular2/common';
import { RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES }	from 'angular2/router';
import { Http } 												from 'angular2/http';
import { AppComponent } 										from './app.component';
import { LogInFormComponent } 									from './login-form.component';
import { SignUpFormComponent } 									from './signup-form.component';
import { LoggedInRouterOutlet } 								from '../LoggedInOutlet';

@Component({
	selector: 'time-sheet',
	template: `<router-outlet></router-outlet>`,
	directives: [AppComponent, LogInFormComponent, LoggedInRouterOutlet]
})
@RouteConfig([
	{ path: '/login', name: 'LogIn', component: LogInFormComponent },
	{ path: '/register', name: 'SignUp', component: SignUpFormComponent },
	{ path: '/app/...', name: 'App', component: AppComponent, useAsDefault: true },
])
export class LogInComponent {}