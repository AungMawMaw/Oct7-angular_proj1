import { Component } from '@angular/core';
import { TodoListItemsComponent } from '../todo-list-items/todo-list-items.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemsComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {}
