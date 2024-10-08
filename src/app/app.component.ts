import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormComponent } from './form/form.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { ConditionInHtmlComponent } from './condition-in-html/condition-in-html.component';
import { HandleUserActionComponent } from './handle-user-action/handle-user-action.component';
import { StyleScopeComponent } from './style-scope/style-scope.component';
import { InputAcceptDataComponent } from './input-accept-data/input-accept-data.component';
import { ComponentOutputComponent } from './component-output/component-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    FormComponent,
    TestServiceComponent,
    ConditionInHtmlComponent,
    HandleUserActionComponent,
    StyleScopeComponent,
    InputAcceptDataComponent,
    ComponentOutputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_proj1';
  label: string = 'helloBlah Blah';
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular_proj1';
// }
