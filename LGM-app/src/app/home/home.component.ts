import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeId: number = 10;
  homeMessage: string = "Hi my name is Fred, and I am from the LGM. Can you help me travel back home?";

  onCreateHome(){
    this.homeMessage = "The user wants to continue and help Fred get home";
  }

  onUpdateHome(event: Event){
    this.homeMessage = (<HTMLInputElement>event.target).value;
  }
  constructor(){
    setTimeout(() => {
      this.homeId
    })
  }


}