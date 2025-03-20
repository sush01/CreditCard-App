import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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
    cardNumber: new FormControl('', 
      [Validators.required, 
      Validators.minLength(16), 
      Validators.maxLength(16),
      Validators.pattern(/^\d+$/)
    ]),
    expiration: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
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

}
