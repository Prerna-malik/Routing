import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router ,Event,NavigationStart,NavigationEnd,NavigationError,NavigationCancel } from '@angular/router';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
    loading:boolean=true;
    constructor(private authService: AuthService,private router:Router) {
        this.router.events.subscribe((eventRouter:Event) =>{
            this.checkRouterEvent(eventRouter);
        
        })
    }
        checkRouterEvent(eventRouter:Event):void{
            if(eventRouter instanceof NavigationStart){
                this.loading=true;
            }
            if(eventRouter instanceof NavigationEnd ||
                eventRouter instanceof NavigationError ||
                eventRouter instanceof NavigationCancel){
                this.loading=false;
            }
        }

    logOut(): void {
        this.authService.logout();
        //console.log('Log out');
       this.router.navigate(['/welcome']);
    }
}
