import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.sass']
})
export class AllNewsComponent implements OnInit {

  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = ''
  @Input()
  Id:string = ''


  constructor(){

  }


  ngOnInit(): void {
  }

  
}
