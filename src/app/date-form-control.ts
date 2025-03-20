import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl{
  override setValue(value:string|null, options:any){

    if (!value){
      super.setValue(this.value, {...options, emitModelToViewChange:true});
      return;
    }
    
    if (value.match(/[^0-9\/]/gi)){
      super.setValue(this.value, {...options, emitModelToViewChange:true});
      return;
    }
    if (value.length > 5){
      super.setValue(this.value, {...options, emitModelToViewChange:true});
      return;

    }
    if (value && value.length === 2 && !value.includes('/')){
      super.setValue(this.value + '/', {...options, emitModelToViewChange: true});
      return;
      }
    super.setValue(this.value,{...options, emitModelToViewChange: true});
    
  }
}

