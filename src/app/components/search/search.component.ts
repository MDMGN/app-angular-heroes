import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() public searchEmit=new EventEmitter<string>();

  handleChange(e:Event){
    const $input:HTMLInputElement=e.target as HTMLInputElement;
    this.searchEmit.emit($input.value)
  }
}
