import { Component, OnInit } from '@angular/core';
import { Auth}  from "aws-amplify";
import { AuthenticationService, User } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  public currentUser: User
  constructor(private authenticationService: AuthenticationService) {
    
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }
  async signOut() {
    try{
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

}
