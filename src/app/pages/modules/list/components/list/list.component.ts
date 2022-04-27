import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/core/services/http-services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: any;
  id: string;
  constructor(
    public listService: ListService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.id = id;
      this.listService.getList(this.id).subscribe(data => {
        this.list = data;
      });
    });
  }

}
