import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      /*
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
    */

    return from(this.auth.getJwtPromise())
            .pipe(
                switchMap(token => {
                    // Clone the request and replace the original headers with
                    // cloned headers, updated with the authorization.
                    const authReq = req.clone({
                        headers: req.headers.set('Authorization', token)
                    });
                    return next.handle(authReq);
                })
            )
  }
}