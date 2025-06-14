import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconPipe } from '../../pipes/icon.pipe';

@Component({
  selector: 'app-search-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, IconPipe],
  templateUrl: './search-sidebar.component.html',
  styleUrl: './search-sidebar.component.scss',
})
export class SearchSidebarComponent {
  @Input() tags: string[] = [];

  @Output() search = new EventEmitter<string>();
  @Output() tagsSelected = new EventEmitter<string[]>(); // multiple

  searchText: string = '';
  selectedTags: string[] = [];

  onSearchChange() {
    this.search.emit(this.searchText.trim().toLowerCase());
  }

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
    this.tagsSelected.emit(this.selectedTags);
  }

  isActive(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }
}
