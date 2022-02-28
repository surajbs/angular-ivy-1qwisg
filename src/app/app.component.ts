import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import * as sampleData from '../data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data: Array<any> = [];
  dataset: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.dataset = (sampleData as any).default;
    console.log(this.dataset);
  }

  getData() {
    this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon')
      .subscribe((response) => this.dataset.push(response));
  }
}
