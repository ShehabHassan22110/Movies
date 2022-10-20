// import { Component, OnInit } from '@angular/core';
// import { FormControl , FormGroup , Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   error:string ='';
//   registerForm= new FormGroup({
//     first_name:new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
//     last_name:new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
//     age:new FormControl(null ,[Validators.required , Validators.min(16) , Validators.max(100)]),
//     email:new FormControl(null , [Valid  ators.email , Validators.required]),
//     password:new FormControl(null , [Validators.pattern('[a-z0-9]{8,20}') , Validators.required])
//   })
//   submitRegisterForm(registerForm:FormGroup){
//     this._AuthService.register(registerForm.value).subscribe((data)=>{
//       if (data.message =='succses')
//       {
//         this._Router.navigate(['/login']) 
//     }
//       else
//        {
//         this.error =data.error.email.message
//        }
   

//     })
    
//   }

//   constructor(private _AuthService:AuthService  , private _Router:Router) { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error:string = "";
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  registerForm:FormGroup = new FormGroup({
    first_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    last_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    age : new FormControl(null , [Validators.required , Validators.min(10) , Validators.max(80)]),
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern('^[a-zA-Z0-9]{3,10}$')]),
  });

  submitForm(registerForm:FormGroup)
  {
    if(registerForm.valid)
    {
      this._AuthService.register(registerForm.value).subscribe((response)=>{
        if(response.message === "success")
        {
          this._Router.navigate(['/login']);
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

