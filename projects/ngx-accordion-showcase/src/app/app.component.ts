import { Component } from '@angular/core';
import { faAppleAlt, faCarrot, faCookie, faBook } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public faAppleAlt = faAppleAlt;
  public faCarrot = faCarrot;
  public faCookie = faCookie;
  public faBook = faBook;
  public activeSection: string;
  public startActive: boolean;
  constructor() {

  }
}
