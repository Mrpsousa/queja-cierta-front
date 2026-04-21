import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface SegmentItem {
  title: string;
  href?: string;
}

@Component({
  selector: 'app-segment-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './segment-card.html',
  styleUrl: './segment-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentCardComponent {
  @Input() title = '';
  @Input() count: number | string = '';
  @Input() icon = 'category';
  @Input() items: SegmentItem[] = [];

  /** If provided by parent, this controls the expanded state for "expand all" behavior. */
  @Input() expandedState: boolean | null = null;

  expanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expandedState'] && this.expandedState !== null) {
      this.expanded = !!this.expandedState;
    }
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
