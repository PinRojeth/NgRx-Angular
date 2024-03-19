import { Component } from '@angular/core';

import { CounterOutputComponent } from './counter-output/counter-output.component';
import { RouterOutlet } from '@angular/router';
// import { CounterControlsComponent } from './counter-controls/counter-controls.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, CounterOutputComponent],
})
export class AppComponent {}
