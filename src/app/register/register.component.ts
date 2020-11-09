import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GenderModel } from '../models/gender.model';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  user: UserModel = new UserModel();
  genderList: GenderModel[] = [];
  isFormValid: boolean;
  
  constructor(private formBuilder: FormBuilder)
  {
    this.userForm = this.formBuilder.group({
      givenName: [this.user.givenName, [Validators.required]],
      birthDate: [this.user.birthDate, [Validators.required]],
      genderId: [this.user.genderId, [Validators.required]],
      streetAddress: [this.user.address.streetAddress, [Validators.required]],
      postalCode: [this.user.address.postalCode, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(10000), Validators.max(99999) ]]
    })
  }

  ngOnInit(): void 
  {
    this.getGenderList();
  }

  getGenderList(): GenderModel[]
  {
    let genderFemale = new GenderModel("108e5f62-212e-4388-91d7-1f886658baf0","Female");
    let genderMale = new GenderModel("2d29d397-e078-4367-9b78-72f8dee40f48","Male");

    this.genderList.push(genderFemale);
    this.genderList.push(genderMale);

    return this.genderList;
  }

  onSubmit() 
  {
    if (this.userForm.valid) this.isFormValid = true;
    else this.isFormValid = false;
  }

}
