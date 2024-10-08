import { Component } from '@angular/core';

@Component({
  selector: 'app-handle-user-action',
  standalone: true,
  imports: [],
  templateUrl: './handle-user-action.component.html',
  styleUrl: './handle-user-action.component.css',
})
export class HandleUserActionComponent {
  announcement = 'blahblah bro';
  transformText() {
    this.announcement = this.announcement.toUpperCase();
  }
}
