import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-output-child',
  standalone: true,
  imports: [],
  templateUrl: './component-output-child.component.html',
  styleUrl: './component-output-child.component.css',
})
export class ComponentOutputChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
