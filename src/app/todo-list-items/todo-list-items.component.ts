import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-list-items',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-items.component.html',
  styleUrl: './todo-list-items.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TodoListItemsComponent {
  taskTitle = 'default name';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }
  editTitle(newtitle: string) {
    this.taskTitle = newtitle;
  }
}
