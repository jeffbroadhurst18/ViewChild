import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { RootObject,Currency,Language,Translations,RegionalBloc } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: RootObject[];

  constructor(private countriesService : CountriesService) { }

  ngOnInit() {
  }

  getCountries() : void {
    this.countriesService.getCountries().subscribe(countries => this.countries = countries);
  }

}
