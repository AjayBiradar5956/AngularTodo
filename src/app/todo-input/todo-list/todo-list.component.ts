import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input()
  task: Array<{
    id: number,
    name: string,
    date: null,
    priority: string,
  }> = [];

  @Output()
  taskNeedsToGetDeleted: EventEmitter<number> = new EventEmitter<number>

  @Output()
  taskNeedsToGetEdited: EventEmitter<number> = new EventEmitter<number>

  deleteTask(id: number) {
    this.taskNeedsToGetDeleted.emit(id);
  }

  editTask(id: number) {
    this.taskNeedsToGetEdited.emit(id);
  }

}
