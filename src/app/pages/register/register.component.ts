import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;



  constructor(private formBuilder: FormBuilder,
    private registerservice:RegisterService ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email : ['', Validators.required],
      city:   ['', Validators.required],
      username : ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else {
    this.loading = true; 
    console.log(JSON.stringify(this.registerForm.value));
    this.registerservice.register(JSON.stringify(this.registerForm.value))
    .subscribe((data)=>{
       alert('success')
     })
    }
}
}