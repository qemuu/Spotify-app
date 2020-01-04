import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  selected = null

  edited = {
    
  }
  
  playlist = {
    name: "Best of Szymek 2019",
    tracks: 23,
    color: "#ff0000",
    favourite: true,
  }

  color(playlist) {
    return { 'borderBottomColor': playlist.color, 
    'borderBottomWidth': '4px' }
  }

  save(event) {
    console.log('zapisano', event)
  }
  constructor() {

  }
}
