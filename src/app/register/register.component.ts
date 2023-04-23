import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validators';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
isSubmitted = false;
  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
    email:['' , Validators.required, Validators.pattern("^[a-z0-9]*[@][a-z]*[.][a-z]{1,3}$")],
    subscribe:[false],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    phone : ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    contact: ['', [Validators.required]],
  },{validator:[ConfirmPasswordValidator]})
  contacus: any = ['facebook', 'twitter', 'google']

  constructor( private fb:FormBuilder)  { 
  }

  changecontact(e:any) {
    console.log(e.value)
    this.contact?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get contact() {
    return this.registerationForm.get('contact');
  }

  ngOnInit(): void {
  }


  get userName()
  {
    return this.registerationForm.get('userName');
  }

  get phone()
  {
    return this.registerationForm.get('phone');
  }

  get email()
  {
    return this.registerationForm.get('email');
  }

  

  setEmailValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        //set validation
        this.email?.setValidators(Validators.required);
      }
      else
      {
       // clear validation
       this.email?.clearValidators();
      }
      //upadte dom
      this.email?.updateValueAndValidity();
    })
  }

  submitData()
  {
    console.log(this.registerationForm.value)
    //component ===> service
    //service==>http call
    //this.enrollService.enroll(this.userModel).subscribe({
      //next:data=>console.log(data),
      //error:error=>console.log(error)
    //});
  }

}



