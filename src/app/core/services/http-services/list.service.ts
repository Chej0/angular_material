import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  root: string = 'http://127.0.0.1:3006/api';


  constructor(public http: HttpClient) { }

  getLists() {
    return this.http.get(this.root + '/list');
  }

  getList(listId: string) {
    return this.http.get(this.root + '/list/' + listId);
  }
}
