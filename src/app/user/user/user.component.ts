import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userSerive: UserService,private router: Router) {}

  
  showAddUser: boolean = false;
  showUserList: boolean = true;
  isUpdate: boolean = false;

  users: Array<User> = [];
  currentUser: User = {};
  ngOnInit(): void {
    this.getUsers();
}

getUsers(){
  this.userSerive.getUsers().subscribe((data:any)=>{
    this.users=data;
})
}

  OnAddUserClick() {
    this.router.navigate(['home/AddUser'])
  }


  

  ShowUserList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddUser = false;
      this.showUserList = true;
    }
  }

  UpdateUser(user: User) {
    this.router.navigate(['home/AddUser'],{ queryParams: { userId: user.id } })
  }
  DeleteUser(user: User) {
    this.userSerive.deleteUser(user.id??0).subscribe((isSuccess)=>{
      this.getUsers();
    })
  }
}
