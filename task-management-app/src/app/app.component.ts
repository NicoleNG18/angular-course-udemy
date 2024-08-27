import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserComponent,TaskComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'task-management-app';
  users= DUMMY_USERS; 
  selectedUserId ?: string;

   get selectedUser(){
      return this.users.find((user)=>user.id===this.selectedUserId);
   }

   onSelectUser(id: string){
       this.selectedUserId = id;
   }

  }


