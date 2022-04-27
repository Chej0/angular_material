import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejercicio';
  mql = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(zone: NgZone) {
    this.mql.addEventListener('change', mql => zone.run( () => {
      this.mql = matchMedia('(prefers-color-scheme: dark)');

      console.log('PREFIERE COLOR NEGRO ? ', this.mql.matches);
    } ));
  }
}
