import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/common/common-data.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private _commonDataService: CommonDataService, private router: Router) {}
  showAddUser: boolean = false;
  showUserList: boolean = true;
  isUpdate: boolean = false;

  users: Array<User> = [];
  currentUser: User = {};
  ngOnInit(): void {
    this.users=this._commonDataService.getUsers;

  }

  OnAddUserClick() {
    this.router.navigate(['home/AddUser'])
  }


  AddUser(newUser: User) {
    const isUserExists = this.users.some((x) => x.Id === newUser.Id);
    if (isUserExists) {
      this._commonDataService.UpdateUser(newUser);
    } else {
      this._commonDataService.AddUser(newUser);
    }
    this.showAddUser = false;
    this.showUserList = true;
  }

  ShowUserList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddUser = false;
      this.showUserList = true;
    }
  }

  UpdateUser(user: User) {
    this.router.navigate(['home/AddUser'],{ queryParams: { userId: user.Id } })
  }
  DeleteUser(user: User) {
    const userIndex = this.users.indexOf(user);
    this.users.splice(userIndex, 1);
  }
}
