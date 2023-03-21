import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../task";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})

export class TaskComponent {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faWindowClose = faWindowClose;
  faSave = faSave;

  editable = false;

  @Input() task = new Task;
  @Input() newTask: string = '';
  @Output() deleteTask = new EventEmitter<Task>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.task.description = description;
  }
  completeTask(done: boolean) {
    this.task.done = !this.task.done
  }

}
