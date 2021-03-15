import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HeatingButtonService {
    constructor(private http: HttpClient){}
    private onUrl = "https://rx5wu7du81.execute-api.eu-central-1.amazonaws.com/beta/heating/on"
    private offUrl= "https://rx5wu7du81.execute-api.eu-central-1.amazonaws.com/beta/heating/off"

    public turnHeatingOn() {
        return this.http.put(this.onUrl, {})
          .pipe(
              tap(
                data => console.log(data),
                error => catchError(this.handleError)
              )
          );
    }
    public turnHeatingOff() {
        return this.http.put(this.offUrl, {})
          .pipe(
              tap(
                data => console.log(data),
                error => this.handleError(error)
              )
          );
    }

    private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
        'Something bad happened; please try again later.');
    }
}