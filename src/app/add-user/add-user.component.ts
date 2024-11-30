import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../Model/User';
import { Userservice } from '../../Service/User-Service';
import { UserItemComponent } from "../user-item/user-item.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, UserItemComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  name!: string;
  task!: string;
  id: number = 0;
  user!: User
  @Output() addUser: EventEmitter<User> = new EventEmitter();
  @Output() updateUser: EventEmitter<User> = new EventEmitter();


  constructor(private userService: Userservice, private toastr: ToastrService) {
    this.userService.getUsersCount()

  }
  ngOnInit(): void {
    //console.log('Test', this.id)
    //this.id = 0
    //this.id = this.userService.getUsersCount()
    //console.log('After Test', this.id)
  }


  onSubmit() {
    if (this.name != '' && this.name != null && this.task != '' && this.task != null) {
      if (this.id == 0) {
        this.id = this.userService.getUsersCount();
        const user: User = {
          id: ++this.id,
          name: this.name,
          task: this.task
        }
        this.addUser.emit(user);
        this.onReset(false);
        this.toastr.success("Record Save Successfully");
        location.reload();
      }
      else {
        const user: User = {
          id: this.id,
          name: this.name,
          task: this.task
        }
        this.updateUser.emit(user);
        this.onReset(false);
      }

    }
    else {
      this.toastr.error("Fields Requried", "Error")
    }
  }

  onReset(isClear: boolean = true) {
    this.id = 0,
      this.name = '',
      this.task = ''
    if (isClear) {
      this.toastr.success("Clear Field");
    }
  }

  deleteUser(user: User) {
    console.log(user);
    this.userService.deleteUser(user);
  }


  getUserById(userId: number) {
    this.user = this.userService.getUserById(userId);
    this.id = this.user.id,
      this.name = this.user.name,
      this.task = this.user.task
  }

}
