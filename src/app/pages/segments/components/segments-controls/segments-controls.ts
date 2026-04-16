import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segments-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segments-controls.html',
  styleUrl: './segments-controls.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentsControlsComponent {
  @Output() expandAll = new EventEmitter<boolean>();
  /** Emitido quando o usuário altera o modo de visualização */
  @Output() viewModeChange = new EventEmitter<'grid' | 'list'>();

  /** O pai fornece o modo atual para que o controle reflita corretamente o estado */
  @Input() viewMode: 'grid' | 'list' = 'grid';

  expandedAll = false;

  toggleExpandAll(): void {
    this.expandedAll = !this.expandedAll;
    this.expandAll.emit(this.expandedAll);
  }

  toggleView(): void {
    const next = this.viewMode === 'grid' ? 'list' : 'grid';
    this.viewMode = next;
    this.viewModeChange.emit(next);
  }
}
