import { Component } from '@angular/core';
import { ComponentOutputChildComponent } from '../component-output-child/component-output-child.component';

@Component({
  selector: 'app-component-output',
  standalone: true,
  imports: [ComponentOutputChildComponent],
  templateUrl: './component-output.component.html',
  styleUrl: './component-output.component.css',
})
export class ComponentOutputComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
