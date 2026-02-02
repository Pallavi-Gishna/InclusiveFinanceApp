import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Thank you for contacting InclusiveFinance! We’ll get back to you soon.');
  }
}
