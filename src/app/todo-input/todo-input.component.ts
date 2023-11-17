import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  //Task object which stores all the user inputs
  task = {
    id: 0,
    name: '',
    date: null,
    priority: '',
  }

  //Tasks array where all the tasks are stored as a array of tasks
  allTasks: Array<{
    id: number;
    name: string;
    date: null;
    priority: string;
  }> = [];

  selectedTask: {
    id: number,
    name: string,
    date: Date | null,
    priority: string,
  } = {
      id: 0,
      name: '',
      date: undefined,
      priority: ''
    };

  ngOnChanges(changes: SimpleChange) {
    if (changes["this.AllTasks"]) {
      let urgentTasks = this.allTasks.filter((task) => task.priority === 'Urgent');
      let normalTasks = this.allTasks.filter((task) => task.priority !== 'Urgent');
      this.allTasks = [...urgentTasks, ...normalTasks];
    }
  }

  addTask() {
    //Not to allow duplicate task names
    let nameCheck = this.allTasks.findIndex((t) => t.name.toLowerCase() === this.task.name.toLowerCase());
    if (nameCheck === -1) {
      let len = this.allTasks.length;
      let newTask = {
        name: this.task.name,
        date: this.task.date,
        priority: this.task.priority,
        id: len + 1,
      }
      //Placing urgent priority task on the top
      if (this.task.priority.toLowerCase() === 'urgent') {
        this.allTasks.unshift(newTask);
      } else {
        this.allTasks.push(newTask);
      }
    }
    console.log(this.allTasks);
    //Reset all the Input fields after adding a task
    this.task.name = '';
    this.task.date = '';
    this.task.priority = '';
  }

  //Deletion Operation 
  onDeletion(e: any) {
    let newArr = this.allTasks.filter((t) => t.id !== e);
    this.allTasks = newArr;
  }

  onEdit(e: any) {
    let taskIndex = this.allTasks.findIndex((t) => t.id === e);
    if (taskIndex !== -1) {
      this.selectedTask = this.allTasks[taskIndex];
    }
  }

  EditOperation(e: any) {
    let taskIndex = this.allTasks.findIndex((t) => t.id === e.id);
    let newObj = {
      id: e.id,
      name: e.name,
      date: e.date,
      priority: e.priority,
    }
    this.allTasks[taskIndex] = newObj;
  }
}
