import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor(private formBuilder:FormBuilder) { }

  shippingForm = this.formBuilder.group({
    name : ['',Validators.required],
    addressLine : ['',Validators.required],
    city : ['',Validators.required],
    state : ['',Validators.required],
    pincode : ['',[Validators.required,Validators.minLength(6)]],
    phoneNumber : ['',[Validators.required,Validators.minLength(10)]]
  });

  onlyNumbersAllowed(event : any):boolean{
    const charCode = (event.which)?event.which: event.keyCode;
      if(charCode > 31 && (charCode < 48 || charCode >57)){
        return false;
      } 
        return true;
  }

  pincodeErrorMsg() {
    if(this.shippingForm.controls['pincode'].errors?.['required'])
    {return "Pincode is required"}

    if(this.shippingForm.controls['pincode'].errors?.['minlength'])
    {return "Enter 6 digits Pincode"}
    else{return "";}
  }

  pincodeInvalid(){
    return this.shippingForm.get('pincode')?.invalid;
  }

  phoneNumberErrorMsg() {
    if(this.shippingForm.controls['phoneNumber'].errors?.['required'])
    {return "Phone Number is required"}

    if(this.shippingForm.controls['phoneNumber'].errors?.['minlength'])
    {return "Enter 10 digits Phone Number"}
    else{ return ""; } 
  }

  phoneNumberInvalid(){
    return this.shippingForm.get('phoneNumber')?.invalid;
  }

  ngOnInit(): void {
  }

}
