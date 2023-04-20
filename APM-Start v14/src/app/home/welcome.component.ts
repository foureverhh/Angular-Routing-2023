import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'pm-home', // This is not needed because we are using routing, not routing by selector as child components
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit{
  public pageTitle = 'Welcome';
  counter: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.counter = Number(params.get('counter')) || 0;
    });
  }


  addCounter(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
    this.router.navigate(['/welcome', { counter: this.counter }]);
  }
}
