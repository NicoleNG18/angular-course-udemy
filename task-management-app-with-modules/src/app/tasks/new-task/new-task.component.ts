import { EventEmitter } from "@angular/core";
import { Component, Input, Output } from '@angular/core';
import { TasksService } from "../tasks.service";
import { inject } from "@angular/core";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


onCancel(){
  this.close.emit();
}

onSubmit(){
   this.tasksService.addTask(
    {
      title: this.enteredTitle,
      date: this.enteredDate,
      summary: this.enteredSummary
    },
   this.userId);  
   this.close.emit();
}

}
