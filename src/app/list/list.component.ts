import { Component } from '@angular/core';
import { ICustomeEvent } from '../list-item/list-item.component';
import { log } from 'console';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  users = [
    {
      firstName:'Ivan',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Pavel',
      lastName: 'Pelovski'
    },
    {
      firstName: 'Stamat',
      lastName: 'Peshov'
    }
  ]

  selectedUserIndex: null | number = null;

  showLastName = true;

  get showSelectedIndex(): boolean{
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >=0
  }

    constructor(){}

    handlerClickEvent(event: MouseEvent){
      this.showLastName = !this.showLastName;
    }

    listItemClickHandler(index: number){
      if(this.selectedUserIndex === index){
        this.selectedUserIndex = null;
        return;
      }

      this.selectedUserIndex = index;
    }

    customEventHandler($event: ICustomeEvent){
      console.log($event);
      
    }
}
