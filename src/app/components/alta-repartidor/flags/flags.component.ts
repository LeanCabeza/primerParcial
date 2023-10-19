import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {

  countries: any[] = [];
  @Output() selectedContinentOutputFlags = new EventEmitter<string>();
  selectedContinent: string = 'Europe';
  displayedCountries: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarPaisesPorContinente("europe")
  }

  seleccionarPais(country: any) {
    console.log("Pais emitido desde flags",country)
    this.selectedContinentOutputFlags.emit(country.name.common)
  }

  cargarPaisesPorContinente(continente: string) {
    this.http.get(`https://restcountries.com/v3.1/region/${continente}`).subscribe((data: any) => {
        const randomNumber = Math.floor(Math.random() * (data.length - 4));
        this.displayedCountries = data.slice(randomNumber, randomNumber + 4);
    });
}

}
