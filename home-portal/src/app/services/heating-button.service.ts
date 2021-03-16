import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from "../../environments/environment";

export interface HeatType  {
    heat: boolean
}
@Injectable({ providedIn: 'root' })
export class HeatingButtonService {
    constructor(private http: HttpClient){}

    private onUrl = environment.apiUrl + "/heating/on"
    private offUrl= environment.apiUrl + "/heating/off"
    private getUrl = environment.apiUrl + "/heating"

    
    public turnHeatingOn() {
        return this.http.put(this.onUrl, {})
          .pipe(
              tap(
                data => console.log(data)
              ),
              catchError(this.handleError)
          );
    }
    public turnHeatingOff() {
        return this.http.put(this.offUrl, {})
          .pipe(
              tap(
                data => console.log(data),
              ),
              catchError(this.handleError)
          );
    }

    public getHeatingStatus(): Observable<HeatType> {
        return this.http.get<HeatType>(this.getUrl, {})
          .pipe(
              tap(
                data => console.log(data),
              ),
              catchError(this.handleError)
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