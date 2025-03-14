import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})

export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('')
  });

}
