import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonDataService } from '../common/common-data.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string=""
  isError=false;
  constructor(private route: ActivatedRoute,private router:Router,private _commonDataService: CommonDataService) { }

  ngOnInit(): void {
    
  }

  HandleSubmit(e:any){
    e.preventDefault();
    this._commonDataService.AuthenticateUser(this.email).subscribe((user:any)=>{
      if(user && user[0].Password==this.password){
        this.router.navigate(['home/user'])
      }
      else{
        this.isError=true;
      }
    },error=>{
      this.isError=true;
    })
  }

}
