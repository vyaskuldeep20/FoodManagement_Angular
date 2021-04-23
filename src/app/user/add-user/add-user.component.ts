import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonDataService } from 'src/app/common/common-data.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  userId:any=null
  users:User[]=[];
  newUser:User =new User();
 isUpdate: boolean = false;

  constructor(private route: ActivatedRoute,private router:Router,private _commonDataService: CommonDataService) {
    this.users=this._commonDataService.getUsers;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id=params['userId'];
      if(id!=null){
        this.userId = parseInt(id);
        this.isUpdate=true;
        this.newUser=this.users.find(x=>x.Id==this.userId)??new User();
      }
      
    });
  }
  

  AddUser(user: User) {
    const isUserExists = this.users.some((x) => x.Id === user.Id);
    if (isUserExists) {
      this._commonDataService.UpdateUser(user);
    } else {
      this._commonDataService.AddUser(user);
    }
    this.router.navigate(['home/user'])
  }

  CancelAddUser(){
    this.router.navigate(['home/user'])
  }
}
