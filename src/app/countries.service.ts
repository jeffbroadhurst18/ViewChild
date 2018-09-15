import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Config } from './config';
import { RootObject,Currency,Language,Translations,RegionalBloc } from './country';
import { ConfigService } from './config.service';
import { catchError }   from 'rxjs/operators';
import {Observable,throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  config:Config;

  constructor(private configService: ConfigService, private http:HttpClient) { 
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig().subscribe((data: Config) =>
      this.config = {
        countriesUrl: data.countriesUrl + "rest/v2/all"
      });
  }

  getCountries(): Observable<RootObject[]>  {
    return this.http.get<RootObject[]>(this.config.countriesUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse)
  {
      if (error.error instanceof ErrorEvent) {
        console.log('Error occurred in getCountries', error.error.message);
      }
      return throwError('Something terrible happened');
  }
}
