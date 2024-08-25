import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// Other Imports
import { ActionsService } from '../../services/actions.service';
// PrimeNg Imports
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { CountryModel } from '../../models/country.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AutoCompleteModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  formGroup!: FormGroup;
  filteredCountries: string[] = [];

  constructor(
    private actionsService: ActionsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      selectedCountry: ['']
    });
  }

  onSearchCountry(event: AutoCompleteCompleteEvent) {
    const query = event.query;
    if (query) {
      this.actionsService.getCountryByCode(query).subscribe((country: CountryModel) => {
        if (country) {
          this.filteredCountries = [country.countryCode];
          console.log(this.filteredCountries);
        } else this.filteredCountries = [];
      });
    }
    
  }

  onSelect(countryCode: string) {
    if (countryCode) {
      this.router.navigate([`/country/${countryCode}`]);
    }
  }
}
