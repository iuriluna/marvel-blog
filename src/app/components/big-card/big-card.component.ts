import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./sass/big-card.component.sass']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = ''
  @Input()
  Id:string = ''


  constructor() {

  }
  ngOnInit(): void {
  }

  
}
