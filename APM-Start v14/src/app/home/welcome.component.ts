import { Component } from '@angular/core';

@Component({
  // selector: 'pm-home', // This is not needed because we are using routing, not routing by selector as child components
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
