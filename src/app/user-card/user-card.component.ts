import { Component, Input } from '@angular/core';

export interface IUser{
  name: string,
  email: string,
  phone: string,
  address: string,
  role: string
};

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user! : IUser;

  showDetails = false;

  showMoreInfo(){
    this.showDetails = !this.showDetails;
  }
}
