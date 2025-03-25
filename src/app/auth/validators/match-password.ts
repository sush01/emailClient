import {  FormGroup, Validator} from "@angular/forms";


export class MatchPassword implements Validator{

  validate(FormGroup: FormGroup) {
    const { password, passwordConfirmation} = FormGroup.value;

    if (password === passwordConfirmation){
      return null;
    } else {
      return { passwordsDontMatch: true};
    }
    
  }

}
