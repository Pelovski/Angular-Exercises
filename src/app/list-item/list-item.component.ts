import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomeEvent{
  test: number
};

@Component({
  selector: 'app-list-item',
  standalone: false,
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
 @Input() user!: { firstName: string, lastName: string }
 @Input() showLastName!: boolean

 @Output() customEvent = new EventEmitter<ICustomeEvent>();

 selectedClickHandler(){
  this.customEvent.emit({test: 123});
 }
}
