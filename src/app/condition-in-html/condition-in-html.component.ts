import { Component } from '@angular/core';

@Component({
  selector: 'app-condition-in-html',
  standalone: true,
  imports: [],
  templateUrl: './condition-in-html.component.html',
  styleUrl: './condition-in-html.component.css'
})
export class ConditionInHtmlComponent {
  isAdamin = true
  blahblahList=[
    {name: 'a', quantity: 1},
    {name: 'b', quantity: 3},
    {name: 'c', quantity: 5},
    {name: 'd', quantity: 2},
  ]

}
