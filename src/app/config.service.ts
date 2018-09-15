import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Config } from './config';
import { throwError }   from 'rxjs';
import { catchError }   from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get<Config>(this.configUrl).pipe(catchError(this.handleError)); //pipe combines multiple operators
  }

  private handleError(error: HttpErrorResponse)
  {
      if (error.error instanceof ErrorEvent) {
        console.log('Error occurred', error.error.message);
      }
      return throwError('Something terrible happened');
  }
}
