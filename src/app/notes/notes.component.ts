import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validators';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

isSubmitted = false;
Product: any = ['Mobile', 'Laptop', 'IPhone', 'MacBook']

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
    comment:[''],
    subscribe:[false],
    aleternativeComments:this.fb.array([]),
    productName: ['', [Validators.required]]
  })



  changeProduct(e:any) {
    console.log(e.value)
    this.productName?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get productName() {
    return this.registerationForm.get('productName');
  }

  get userName()
  {
    return this.registerationForm.get('userName');
  }
  get comment()
  {
    return this.registerationForm.get('comment');
  }

  get aleternativeComments()
  {
    return this.registerationForm.get('aleternativeComments') as FormArray;
  }

  addAleternativeComments()
  {
    this.aleternativeComments.push(this.fb.control(''));
  }
  deleteComment(index:any)
  {
   this.aleternativeComments.removeAt(index);
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  loadData()
  {
    this.registerationForm.patchValue({
      userName:'Client',
  })
}

  setCommentValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        //set validation
        this.comment?.setValidators(Validators.required);
      }
      else
      {
       // clear validation
       this.comment?.clearValidators();
      }
      //upadte dom
      this.comment?.updateValueAndValidity();
    })
  }

  submitData()
  {
    console.log(this.registerationForm.value)
  }

}


