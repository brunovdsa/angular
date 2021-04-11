import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = false; //usar @input quando quiser usar um parametro de forma declarativa 

  constructor() { }

  ngOnInit(): void {
  }

}
