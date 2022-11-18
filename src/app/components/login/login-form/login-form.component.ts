import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {

  constructor(public service: LoginService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.postLogin().subscribe(
      res => {
        this.resetForm(form);
      },
      err => { 
        console.log(err);
        if(err.error.message){
          this.toastr.error(err.error.message, err.error.error);
        }
        else{
          this.toastr.error('Cannot reach server. Please check your internet connection.', 'Internal server error');
        }
      }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
  }
}
