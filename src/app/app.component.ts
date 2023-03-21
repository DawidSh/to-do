import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from "./task";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/* @Component({
  selector: 'app-task',
  templateUrl: './task/task.component.html',
  styleUrls: ['./task/task.component.css']
}) */

export class AppComponent {
  title = 'to-do-list';
  filter: 'all' | 'active' | 'done' = 'all';

  allTasks: Task[] = [];



  /* allTasks = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ]; */

  get tasks() {
    if (this.filter === 'all') {
      return this.allTasks;
    }
    return this.allTasks.filter(item => this.filter === 'done' ? item.done : !item.done);
  }


  addTask(description: string) {
    if (description.length == 0) {
      alert("Please Enter a Task")
    }
    else {
      this.allTasks.unshift({
        description,
        done: false
      });
    }

  }
  deleteTask(task: any) {
    this.allTasks.splice(this.allTasks.indexOf(task), 1);
  }

}

