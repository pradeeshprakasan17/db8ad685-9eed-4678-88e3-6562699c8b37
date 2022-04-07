
import { FormControl, ValidationErrors } from '@angular/forms';

export class Validatorr  {

    // whitespace validation
    static notOnlyWhitespace(control: any) : ValidationErrors|any{
        
        // check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {

            // invalid, return error object
            return { 'notOnlyWhitespace': true };
        }
        else {
            // valid, return null
            return null;
        }
    }
}
