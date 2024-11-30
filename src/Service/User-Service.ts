
import { Injectable, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})
export class Userservice implements OnInit {
  users: User[] = [];
  localList: any;
  user: any;

  constructor(){
  }
  ngOnInit(): void {
    //this.users = this.getUsers();
  }

  getUsers(): User[] {
    this.localList = localStorage.getItem("user");
    if(this.localList  == null){
      this.users = this.users;
    }
    else{
      this.users = JSON.parse(this.localList);
    }
    if(this.users.length == 0){
      localStorage.removeItem("user");
    }

    return this.users;
  }

  getUsersCount(): number {
    this.users = this.getUsers();
    return this.users.length;
  }


  addUser(user: any) {
    this.users.push(user);
    localStorage.setItem("user", JSON.stringify(this.users))
  }

  updateUser(user: any) {
    var oldUser = this.getUserById(user.id);
    var index = this.users.indexOf(oldUser);
    this.users[index].id = user.id;
    this.users[index].name = user.name;
    this.users[index].task = user.task;
    localStorage.setItem("user", JSON.stringify(this.users))
  }

  getUserById(userId: number): User {
    this.user = this.users.find(x => x.id == userId);
    return this.user;
  }

  deleteUser(user: User) {
    var index = this.users.indexOf(user);
    this.users.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(this.users))
  }
}