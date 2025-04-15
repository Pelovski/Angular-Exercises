import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {


  title = 'myProject';
  changeTitleHandler(newTitle: string){
    this.title = newTitle;
  }
}
