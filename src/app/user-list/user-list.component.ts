import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users = [
    { 
      name: 'Ivan Ivanov',
      email: 'ivan@example.com',
      phone: '0888 123 456',
      address: 'ул. Софийска 15',
      role: 'Admin'
    },
    { 
      name: 'Maria Petrova',
      email: 'maria@example.com',
      phone: '0888 456 789',
      address: 'ул. Пернишка 15',
      role: 'User'
    },
    { 
      name: 'Georgi Georgiev',
      email: 'georgi@example.com',
      phone: '08428 123 456',
      address: 'ул. Немска 15',
      role: 'User'
    },
  ];


}
