import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-bar-card',
  imports: [],
  templateUrl: './second-bar-card.html',
  styleUrl: './second-bar-card.css',
})
export class SecondBarCard {
  @Input() icon: string = '📢';
  @Input() text: string = '';
  @Output() cardClick = new EventEmitter<void>();

  onClick(): void {
    this.cardClick.emit();
  }
}
