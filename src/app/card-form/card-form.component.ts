import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
  
})

export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

}
