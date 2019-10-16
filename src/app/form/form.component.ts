import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //  local reference from selector can be accessed as well in this way:
  @ViewChild('form') signUpFrom: NgForm;
  submitted = false;
  answer = '';
  genders = ['man', 'women'];

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  };


  //  better approach is to just change property we want to change:
  suggestUsername() {
    const suggestedName = 'Songo';
    this.signUpFrom.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );
  }

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    // local reference will be the same as above:
    // console.log(this.signUpFrom);

    this.submitted = true;

    this.user.username = this.signUpFrom.value.userData.username;
    this.user.email = this.signUpFrom.value.userData.email;
    this.user.secret = this.signUpFrom.value.secret;
    this.user.answer = this.signUpFrom.value.answer;
    this.user.gender = this.signUpFrom.value.gender;

    // reset form after submitting
    // some values as username here can be set up here
    this.signUpFrom.reset(
      {
        userData:
          {
            username: 'Songo'
          }
      }
    )
  }

  //  setting all values to form from local reference
  //  js object have to have all properties (even if set to empty string) !
  //  this will set all values as set up here - so it will delete what user already input !
  // suggestUsername() {
  //   const suggestedName = 'Songo';
  //   this.signUpFrom.setValue({
  //     answer: "",
  //     gender: "man",
  //     secret: "pet",
  //     userData: {
  //       email: "",
  //       username: suggestedName
  //     }
  //   })
  // }
}
