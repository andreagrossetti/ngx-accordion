import { Component } from '@angular/core';
import { faUser, faChartBar, faQuestionCircle, faBarcode } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public faUser = faUser;
  public faChartBar = faChartBar;
  public faQuestionCircle = faQuestionCircle;
  public faBarcode = faBarcode;
  public activeSection: string;
  public startActive: boolean;
  constructor() {
    this.startActive = true;
  }
}
