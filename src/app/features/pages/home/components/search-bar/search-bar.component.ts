import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  selectedOption: string = 'comprar';

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
