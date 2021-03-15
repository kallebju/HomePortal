import { Injectable, ChangeDetectorRef, NgZone, ApplicationRef } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Auth } from "aws-amplify";
export interface User {
    authState: AuthState;
    user: CognitoUserInterface | undefined;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private ref: ApplicationRef){
        this.currentUserSubject = new BehaviorSubject<User>({authState: null, user: undefined});
        this.currentUser = this.currentUserSubject.asObservable();
        onAuthUIStateChange((authState, authData) => {
            this.currentUserSubject.next({authState: authState, user: authData as CognitoUserInterface});
            this.ref.tick();
        })
    }

    public async getJwtPromise(): Promise<string>{
        return (await Auth.currentSession()).getIdToken().getJwtToken()
    }


}