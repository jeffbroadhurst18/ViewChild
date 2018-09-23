import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { RootObject,Currency,Language,Translations,RegionalBloc } from '../country';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { catchError,map }   from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: RootObject[];
  countries$: Observable<RootObject[]>;
  private searchTerms = new Subject<string>(); //stream of observables
  selectedCountry: string;

  constructor(private countriesService : CountriesService) { }

  ngOnInit() {
     this.countries$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.countriesService.getCountriesByName(term).pipe(map(f => f.filter(r => r.name.startsWith(term)))))
    );
  }

  getCountries() : void {
    this.countriesService.getCountries().subscribe(countries => this.countries = countries);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term); //emits the next observable which is a search term.
  }

  selectCountry(root:RootObject) : void
  {
    this.selectedCountry = root.name;
  }

}
