import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardNumber: string | null = null;
  @Input() name: string | null = null;
  @Input() expiration: string | null = null;


}
