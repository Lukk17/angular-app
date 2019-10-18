import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['A', 'B'];

  constructor() {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        //  custom validators must be bind with "this" to let know angular
        //  of which class "this" it should call inside validator method
        //  because validators are not connected to class when angular call them
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),

        // no need to bind custom valid as it not using "this" inside code
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    //  listener for changes in form object
    this.signUpForm.valueChanges.subscribe(
      (value)=> {
        console.log(value);
      }
    );

    // listener in changes of form status for example "INVALID", "PENDING" (FOR ASYNC VALIDATOR)
    this.signUpForm.statusChanges.subscribe(
      (value => {
        console.log(value);
      })
    );

    // set username on init
    this.signUpForm.patchValue({
      'userData': {
        'username': 'Songo'
      }
    });

  }

  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.signUpForm.get('hobbies')).push(control);
  }

  // Custom validator
  forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden' : true}
    }
    return null;
  }

  // Custom async validator
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(resolve => {
      setTimeout(() =>  {
        if (control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null)
        }
      },2000);
    });
    return promise;
  }
}
