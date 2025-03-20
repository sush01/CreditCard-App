import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { CardComponent } from '../card/card.component';
import { DateFormControl } from '../date-form-control';
@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent, CardComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
  
})

export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    cardNumber: new FormControl('', 
      [Validators.required, 
      Validators.pattern(/^\d+$/),
      Validators.minLength(16), 
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ]
    )
  });

  constructor(){
    
  }

  onSubmit(){
    console.log('Form was submitted');
  }

  onResetClick(){
    this.cardForm.reset();

  }
  onCardNumberInput(event: any) {
    let cardNumber = event.target.value;
  
    // Allow only digits
    cardNumber = cardNumber.replace(/\D/g, '');
  
    // Limit the length to 16 digits
    if (cardNumber.length > 16) {
      cardNumber = cardNumber.substring(0, 16);
    }
  
    // Update the form control with the valid card number
    this.cardForm.controls.cardNumber.setValue(cardNumber);
  }

  

}
