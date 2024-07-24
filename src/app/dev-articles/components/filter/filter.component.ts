import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SortValue } from '../../model/sort-value';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  @Output()
  filterChanged = new EventEmitter<string>();
  @Output()
  sortChanged = new EventEmitter<SortValue>();
  @Output()
  latestOnlyChanged = new EventEmitter<boolean>();

  filter = new FormControl('');
  sort = new FormControl<SortValue>('');
  latestOnly = new FormControl(false);

  ngOnInit() {
    this.filter.valueChanges.subscribe((value) =>
      this.filterChanged.emit(value ?? ''),
    );
    this.sort.valueChanges.subscribe((value) => {
      this.sortChanged.emit(value ?? '');
    });
    this.latestOnly.valueChanges.subscribe((value) => {
      this.latestOnlyChanged.emit(value ?? false);
    });
  }
}
