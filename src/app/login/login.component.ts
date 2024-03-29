// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   error:string='' ;

//   loginForm= new FormGroup({
//     email:new FormControl(null , [Validators.email , Validators.required]),
//     password:new FormControl(null , [Validators.pattern('[a-z0-9]{8,20}') , Validators.required])
//   })

//   constructor(private _AuthService:AuthService , private _Router:Router )
//    {
//      this._AuthService.login(this.loginForm.value).subscribe((response)=>{
//         if(response.message =='sucsses')
//         {
//           localStorage.setItem('userYoken', response.token)
//           this._Router.navigate(['/home'])
//         }
//         else
//         {
//           this.error =response.message ; 
//         }
//      })
//     }
//   submitloginForm(loginForm:FormGroup){

//   }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string = "";
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  loginForm:FormGroup = new FormGroup({
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern('^[a-zA-Z0-9]{3,10}$')]),
  });

  submitForm(loginForm:FormGroup)
  {
    if(loginForm.valid)
    {
      this._AuthService.login(loginForm.value).subscribe((response)=>{
        if(response.message === "success")
        {
          localStorage.setItem("currentUser" , response.token);
          this._AuthService.saveCurrentUserData();
          this._Router.navigate(['/home']);
        }
        else
        {
          this.error = response.message; 
        }

      })
    }
  }

  ngOnInit(): void {
  }

}
