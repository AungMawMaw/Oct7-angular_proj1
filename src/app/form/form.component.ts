import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  // templateUrl: './form.component.html',
  template: `
    <button type="submit" [disabled]="formIsInvalid">Submit</button>
  `,
  styleUrl: './form.component.css',
})
export class FormComponent {
  formIsInvalid = true;
}
