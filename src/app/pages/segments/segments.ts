import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/components/navbar';
import { SegmentsGridComponent } from './components/segments-grid/segments-grid';
import { FooterComponent } from "../../layout/components/footer/footer";

@Component({
  selector: 'app-segments',
  imports: [NavbarComponent, SegmentsGridComponent, FooterComponent],
  templateUrl: './segments.html',
  styleUrl: './segments.css',
})
export class Segments {

}
