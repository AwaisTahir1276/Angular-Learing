import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, ToastrModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-Manager';

  onLoad(){
    location.reload();
  }
}
