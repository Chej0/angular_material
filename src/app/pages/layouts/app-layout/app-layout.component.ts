import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ListService } from 'src/app/core/services/http-services/list.service';
const SMALL_BREAKPOINT = 960;
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  smallScreen: boolean;
  public mediaMatcher: MediaQueryList = window.matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`);
  @ViewChild('sidenav') sidenav: MatSidenav;


  lista: any;
  constructor(zone: NgZone, public listService: ListService) {
    this.mediaMatcher.addEventListener('change', mql => zone.run( () => {
      this.mediaMatcher = matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`);
      this.smallScreen = this.mediaMatcher.matches;
    } ));
  }

  ngOnInit(): void {
    console.log(this.sidenav);

    this.listService.getLists().subscribe(data => {
      console.log(data);
      this.lista = data;
    });
  }

}
