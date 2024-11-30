import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../Model/User';
import { Userservice } from '../../Service/User-Service';
import { AddUserComponent } from "../add-user/add-user.component";

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, AddUserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
 users!: User[];
 user!: User;

  constructor(private userService: Userservice){
    //this.users = this.getUser();
  }

  ngOnInit(): void {
    
  }

  getUser(): User[]{
    console.log("Load Data User: ");
    this.users = this.userService.getUsers();
    console.log(this.users);
    return this.users;
  }
  
  deleteUser(user: User){
    console.log(user);
    this.userService.deleteUser(user);
  }
  
  addUser(user: User){
    this.userService.addUser(user);
  }

  updateUser(user: User){
    this.userService.updateUser(user);
  }

  getUserById(userId: number): User{
    this.user = this.userService.getUserById(userId);
    return this.user;
  }

}
