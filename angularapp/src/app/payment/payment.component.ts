import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/services/payment.service'; 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService:PaymentService,private formBuilder:FormBuilder,private router:Router) { }

  payableAmount = 500;

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", 
    "amount": this.payableAmount * 100, 
    "currency": "INR",
    "name": "Amaze Pack",
    "description": "Test Transaction",
    "image": "../../assets/images/login-main.png",
    //"callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "handler": function (response:any){
        alert("Payment Success");
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
    },
    //"redirect":true,
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
    },
    "retry": {
      "enabled" : false,
      "max_count": 1
    }
  };
  
  razorPay(){
    let rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed',
      function (response:any){
      alert("Payment Failed");
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
});
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
    else{return ""}
  }

  pincodeInvalid(){
    return this.shippingForm.get('pincode')?.invalid;
  }

  phoneNumberErrorMsg() {
    if(this.shippingForm.controls['phoneNumber'].errors?.['required'])
    {return "Phone Number is required";}

    if(this.shippingForm.controls['phoneNumber'].errors?.['minlength'])
    {return "Enter 10 digits Phone Number";}
    else{ return "";} 
  }

  phoneNumberInvalid(){
    return this.shippingForm.get('phoneNumber')?.invalid;
  }

  ngOnInit(): void {
  }

}
