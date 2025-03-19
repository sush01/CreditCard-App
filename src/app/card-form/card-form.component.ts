import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormControlName} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
  
})

export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl('')
  });

  constructor(){
    
  }

}
