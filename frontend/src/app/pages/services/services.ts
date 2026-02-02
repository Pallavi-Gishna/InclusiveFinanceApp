import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar";

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
  imports: [NavbarComponent]
})
export class Services implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
