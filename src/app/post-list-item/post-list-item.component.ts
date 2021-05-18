import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postPatate:string;
  @Input() postContent:string;
  @Input() postLike:number;
  @Input() postCreate:Date;

  constructor() { }

  ngOnInit(): void {
  }

  getColor():string{
    if (this.postLike>0) {
      return 'green';
    }else if(this.postLike<0){
      return 'red';
    }else{
      return 'white';
    }
  }

  increment(){
    this.postLike++;
  }

  decrement(){
    this.postLike--;
  }
}
