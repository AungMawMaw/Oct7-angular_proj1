import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-scope',
  standalone: true,
  imports: [],
  templateUrl: './style-scope.component.html',
  styleUrl: './style-scope.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class StyleScopeComponent {}
