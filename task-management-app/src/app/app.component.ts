import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-management-app';
  users= DUMMY_USERS; 
  selectedUser=this.users[0];

  onSelectUser(id: string){

let obj=this.users.find(user => {
  return user.id==id;
});
    if(obj != undefined){
      this.selectedUser =obj;
    } 
  }
}
