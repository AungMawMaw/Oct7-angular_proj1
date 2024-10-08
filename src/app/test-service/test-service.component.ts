import { Component, inject } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-test-service',
  standalone: true,
  imports: [],
  // templateUrl: './test-service.component.html',
  template: `<h1>The total is {{ totalCost }}</h1>`,
  styleUrl: './test-service.component.css',
})
export class TestServiceComponent {
  private testService = inject(TestServiceService);
  totalCost = this.testService.add(222, 333);
}
