import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./sass/content.component.sass']
})
export class ContentComponent implements OnInit {
  
  photoCover:string = ''
  convertTitle:string = ''
  contentDescription:string = ''
  private id:string | null = '0'


  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() === id)[0]
    
      this.convertTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo
  }

}
