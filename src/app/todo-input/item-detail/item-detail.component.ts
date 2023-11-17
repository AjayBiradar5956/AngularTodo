import { Component, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  @Input()
  task: {
    id: number,
    name: string,
    date: Date | null,
    priority: string,
  } = {
      id: 0,
      name: '',
      date: null,
      priority: '',
    };

  editedTask: {
    id: number,
    name: string,
    date: Date | null,
    priority: string,
  } = {
      id: 0,
      name: '',
      date: null,
      priority: '',
    };

  ngOnChanges(changes: SimpleChanges) {
    // Update editedTask when task changes
    if ('task' in changes) {
      this.editedTask.id = this.task.id;
    }
  }

  @Output()
  onEditTaskButtonClicked: EventEmitter<Object> = new EventEmitter<Object>;
  editTask() {
    this.onEditTaskButtonClicked.emit(this.editedTask);
    var doc = document.querySelector('.offcanvas');
    var doc1 = document.querySelector('.fade');
    var body = document.body;
    body.style.overflow = 'visible';
    doc.classList.remove('show');
    if (doc1) {
      doc1.remove();
    }
    //reset values
    this.editedTask.id = 0;
    this.editedTask.name = '';
    this.editedTask.priority = '';
    this.editedTask.date = null;

  }
}


