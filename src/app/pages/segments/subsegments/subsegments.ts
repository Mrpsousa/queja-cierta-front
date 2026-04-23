import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../layout/components/navbar";
import { FooterComponent } from "../../../layout/components/footer/footer";

@Component({
  selector: 'app-subsegments',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './subsegments.html',
  styleUrl: './subsegments.css',
})
export class Subsegments {

}
