import {
  booleanAttribute,
  Component,
  Input,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-input-accept-data',
  standalone: true,
  imports: [],
  templateUrl: './input-accept-data.component.html',
  styleUrl: './input-accept-data.component.css',
  inputs: ['disabled'],
})
export class InputAcceptDataComponent {
  @Input({ required: false }) value = 0;
  @Input({ required: false, transform: trimString }) label = '';
  count = this.value;

  @Input({ required: false, transform: number_appendPx }) widthPx: string = '';

  @Input({ required: false, transform: booleanAttribute }) disabled = false;
  @Input({ required: false, transform: numberAttribute }) number = 0;

  @Input({ required: false, alias: 'aliasname' }) acceptedAlias = '';

  //
  //
  private internalvalue = 0;
  @Input()
  get getSetValue(): number {
    return this.internalvalue;
  }
  set getSetValue(value: number) {
    this.internalvalue = value;
  }
  onInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.internalvalue = +input.value;
  }
  /////
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
function number_appendPx(value: number) {
  return `${value} px`;
}
