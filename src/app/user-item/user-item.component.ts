import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../Model/User';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-item',
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
 @Input() users!: User[];
 //public userKeys: string[] = [];
 @Output() userDelete: EventEmitter<User> = new EventEmitter();
 @Output() getUserById: EventEmitter<number> = new EventEmitter();

 constructor(private userList : UserListComponent){
  this.users = this.userList.getUser();
 }

  ngOnInit(): void {
    //this.users = this.userList.getUser();
    //this.userKeys = Object.keys(this.users);
  }

  onClick(user: User){
    this.userDelete.emit(user);
    console.log("Click on Button");
  }

  getUserbyId(userId: number){
    this.getUserById.emit(userId);
  }
}
