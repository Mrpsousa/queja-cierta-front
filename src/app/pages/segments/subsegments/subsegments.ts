import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../../layout/components/navbar';

@Component({
  selector: 'app-subsegments',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './subsegments.html',
  styleUrls: ['./subsegments.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Subsegments {
  selectedRanking: 'verified' | 'best' | 'worst' = 'best';

  onSelectRanking(ranking: 'verified' | 'best' | 'worst'): void {
    this.selectedRanking = ranking;
  }

  onSearchSubmit(event: Event): void {
    event.preventDefault();
  }
}
