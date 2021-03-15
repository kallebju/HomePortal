import { Component, ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { AuthenticationService, User } from './services/authentication.service';


@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'home-portal';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }
}
