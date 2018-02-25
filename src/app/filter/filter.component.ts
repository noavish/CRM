import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() searchChanged: EventEmitter<string> = new EventEmitter();
  searchTerm: string = '';
  constructor() { }

  ngOnInit() {
  }

  filterChanged() {
    this.searchChanged.emit(this.searchTerm);
  }
}
