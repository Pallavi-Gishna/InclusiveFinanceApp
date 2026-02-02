import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar";

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
onSubmit($event: SubmitEvent) {
throw new Error('Method not implemented.');
}

}
