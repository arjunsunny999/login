import { ToastrService } from 'ngx-toastr';  
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { style } from '@angular/animations';
import countryForm from 'src/assets/countryForm.json';


@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: [ './formtwo.component.css' ]
})

export class FormtwoComponent {
  formtwo: FormGroup;
  title = 'angulartoastr';
  countrydata: any = countryForm;
 
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {

    
    this.formtwo = this.formBuilder.group({
      fname: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern("[A-Za-z]+")]],
      lname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(60),Validators.pattern("[A-Za-z]+")]],
      country: ['', Validators.required ],
      post: ['', ],
      contactPreference: ['', Validators.required],
      mail: ['', [Validators.required,Validators.email, Validators.maxLength(60)]],
      num: ['', Validators.pattern("[0-9]+") ],
      exampleCheck1: [false],
      exampleCheck2: [false],
    });
  }
  showSuccess() {
    this.toastr.success('', 'SUCCESS',
    {timeOut: 2000});;
  }
  // tslint:disable-next-line: typedef
  onSubmit()  {
    console.log(this.formtwo.value);
  }

   showStuff(id) {
    document.getElementById(id).style.display = 'block';
}

   hideStuff(id) {
  document.getElementById(id).style.display = 'none';
}

  onCountryChange() {
    let countrySelected = this.formtwo.get('country').value;
    console.log(countrySelected);
    if(countrySelected === 'CA') {
      this.showStuff("zip")
      this.formtwo.get('post').setValidators([
        Validators.required,
        Validators.pattern("[A-Z]+[0-9]+[A-Z]+[0-9]+[A-Z]+[0-9]")]); 
        this.formtwo.get('post').updateValueAndValidity();
    }
     else if (countrySelected === 'US') {
      this.showStuff("zip")
      this.formtwo.get('post').setValidators([
        Validators.required,
        Validators.pattern("[0-9]{5}")]); 
        this.formtwo.get('post').updateValueAndValidity();
    }
    else {
      this.hideStuff("zip")
      this.formtwo.get('post').clearValidators(); 
      this.formtwo.get('post').updateValueAndValidity();
    }
  }


  onBclick() {
    let myButton = this.formtwo.get('contactPreference').value;
    if(myButton === 'Phone') {
      
       this.showStuff("ph")
      this.formtwo.get('num').setValidators([Validators.required, Validators.pattern("[0-9]+")]); 
      this.formtwo.get('num').updateValueAndValidity();
    } else {

      this.hideStuff("ph")
      this.formtwo.get('num').clearValidators(); 
      this.formtwo.get('num').updateValueAndValidity();
    }
  }

  
}
