import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/common/common-data.service';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private _commonDataService: CommonDataService) {}
  showAddUser: boolean = false;
  showUserList: boolean = true;
  isUpdate: boolean = false;

  users: Array<User> = [];
  currentUser: User = {};
  ngOnInit(): void {
    this.users=this._commonDataService.getUsers;

  }

  OnAddUserClick() {
    this.showAddUser = true;
    this.showUserList = false;
    this.isUpdate = false;
    this.currentUser = {};
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
    this.currentUser = user;
    this.showAddUser = true;
    this.showUserList = false;
    this.isUpdate = true;
  }
  DeleteUser(user: User) {
    const userIndex = this.users.indexOf(user);
    this.users.splice(userIndex, 1);
  }
}
