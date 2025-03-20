import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  cardNumber!: string;
  @Input()name!: string;
  @Input() expiration!: string;


}
