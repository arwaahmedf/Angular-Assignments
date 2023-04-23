import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validators';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerationForm=this.fb.group({
    email:['' , Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
    password:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
  }


  get email()
  {
    return this.registerationForm.get('email');
  }

  submitData()
  {
    console.log(this.registerationForm.value)

  }
}
