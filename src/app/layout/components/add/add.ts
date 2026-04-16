import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.html',
  styleUrl: './add.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {}
