import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor(private paymentService:PaymentService,private formBuilder:FormBuilder) { }

  amount= 500 * 100;
  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", 
    "amount": this.amount, 
    "currency": "INR",
    "name": "Amaze Pack",
    "description": "Test Transaction",
    "image": "../../assets/images/login-main.png",
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "order_id":"",
    "prefill": {
        "name": "User",
        "email": "user@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  };

  razorPay(){
    let rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options);
    rzp1.open();
  }

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
