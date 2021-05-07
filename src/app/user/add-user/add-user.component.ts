import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service.service';

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

  constructor(private route: ActivatedRoute,private router:Router,private userSerive: UserService) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id=params['userId'];
      if(id!=null){
        this.userId = parseInt(id);
        this.isUpdate=true;
        this.userSerive.getUsers().subscribe((data:any)=>{
          this.users=data;
          this.newUser=this.users.find(x=>x.id==this.userId)??new User();
        })
        
      }
      
    });
  }
  

  AddUser(user: User) {
       this.userSerive.saveUser(user).subscribe((success)=>{
        this.router.navigate(['home/user'])
       });
    
  }

  CancelAddUser(){
    this.router.navigate(['home/user'])
  }
}
