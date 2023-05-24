import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./sass/small-card.component.sass']
})
export class SmallCardComponent implements OnInit {

  @Input()
  cardPhoto:string = ''

  @Input()
  cardTitle:string = ''

  @Input()
  Id:string = ''
  
  constructor() {

  }
  
  ngOnInit(): void {
  }

}
